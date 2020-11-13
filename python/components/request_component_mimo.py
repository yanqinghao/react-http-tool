# coding=utf-8
from __future__ import absolute_import, print_function

import importlib
import suanpan
from suanpan.error.node import NodeError
from suanpan.app import app
from suanpan.node import node
from suanpan.app.arguments import Json, String
from suanpan.utils import json
from suanpan.log import logger
from suanpan import g
from suanpan.api.requests import request
from suanpan.objects import Context
import requests


@app.afterInit
def afterInit(context):
    args = context.args
    g.auth_importing = {
        "HTTPBasicAuth": "requests.auth",
        "HTTPDigestAuth": "requests.auth",
        "OAuth1": "requests_oauthlib"
    }
    if not args.configs:
        NodeError("please provide request configs")
    if not isinstance(args.configs, list):
        NodeError("please provide a list of request configs")
    if len(args.configs) != len(node.inargs):
        NodeError("please provide the same length of configs with inputs")
    if len(node.outargs) != len(node.inargs):
        NodeError("please provide the same length of outputs with inputs")


@app.param(Json(key="configs"))
def request_component_mimo(context):
    args = context.args
    try:
        args.update(app.load(node.inargs))
    except:
        node.inargs = [Json(key=f"inputData{i}") for i in range(1, g.input_nums + 1)]
        args.update(app.load(node.inargs))
    for i, j in args.items():
        if "inputData" in i and j is not None:
            outputPort = "outputData" + i.replace("inputData", "")
            try:
                inputData = Context.froms(j)
            except:
                inputData = j
            config = Context.froms(args.configs[int(i.replace("inputData", "")) - 1])
            kwds = {}
            suanpan_auth = False
            try:
                url = eval(config.url)
            except:
                url = config.url
            logger.info("request url {}".format(url))
            if g.host in url:
                suanpan_auth = True
            try:
                data_params = eval(config.data)
            except:
                data_params = config.data
            try:
                json_params = eval(config.get("json"))
            except:
                json_params = config.get("json")
            try:
                url_params = eval(config.params)
            except:
                url_params = config.params
            if data_params:
                kwds["data"] = data_params
                logger.info(f"load data pass to parameters: {data_params}")
            if json_params:
                kwds["json"] = json_params
                logger.info(f"load json pass to parameters: {json_params}")
            if url_params:
                kwds["params"] = url_params
                logger.info(f"load params pass to parameters: {url_params}")
            auth = None
            if config.auth:
                authPKG = importlib.import_module(g.auth_importing[config.authType])
                try:
                    authData = eval(config.auth)
                    if isinstance(authData, str):
                        authData = authData.split(",")
                except:
                    authData = config.auth.split(",")
                auth = getattr(authPKG, config.authType)(*authData)
                kwds["auth"] = auth
                logger.info("load auth {}".format(authData))
            try:
                headers = eval(config.headers)
            except:
                headers = config.headers
            if headers:
                kwds["headers"] = headers
                logger.info("load headers: {}".format(headers))
            try:
                cookies = eval(config.cookies)
            except:
                cookies = config.cookies
            if cookies:
                kwds["cookies"] = cookies
                logger.info("load cookies: {}".format(headers))
            node.outargs[int(i.replace("inputData", "")) - 1] = Json(key=outputPort)
            if suanpan_auth:
                logger.info("request for suanpan api, send json to next node")
                app.send({outputPort: request(config.method, url, **kwds)},
                         message=context.message,
                         args=node.outargs)
            else:
                try:
                    app.send(
                        {
                            outputPort:
                            json.loads(getattr(requests, config.method)(url, **kwds).content)
                        },
                        message=context.message,
                        args=node.outargs)
                    logger.info("request for external api, send json to next node")
                except:
                    node.outargs[int(i.replace("inputData", "")) - 1] = String(key=outputPort)
                    app.send({outputPort: getattr(requests, config.method)(url, **kwds).text},
                             message=context.message,
                             args=node.outargs)
                    logger.info("request for external api, send string to next node")


if __name__ == "__main__":
    suanpan.run(app)

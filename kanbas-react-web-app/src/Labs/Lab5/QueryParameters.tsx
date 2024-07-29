import React, { useState } from "react";
// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER ;
export default function QueryParameters() {
    const [a, setA] = useState("3");
    const [b, setB] = useState("2");
    return (
        <div>
            <div id="wd-query-parameters">
                <h3>Query Parameters</h3>
                <input id="wd-query-parameter-a"
                    className="form-control mb-2"
                    value={a} type="number"
                    onChange={(e) => setA(e.target.value)} />
                <input id="wd-query-parameter-b"
                    className="form-control mb-2"
                    value={b} type="number"
                    onChange={(e) => setB(e.target.value)} />

                <a className="btn btn-primary me-2" id="wd-query-parameter-add"
                    href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
                    Add {a} + {b}
                </a>

                <a className="btn btn-primary me-2" id="wd-query-parameter-subtract"
                    href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
                    Substract {a} - {b}
                </a>

                <a className="btn btn-primary me-2" id="wd-query-parameter-multiply"
                    href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
                    Multiply {a} * {b}
                </a>

                <a className="btn btn-primary me-2" id="wd-query-parameter-divide"
                    href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
                    Divide {a} / {b}
                </a>
                <hr />
            </div>
        </div>

    )



}
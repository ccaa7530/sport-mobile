// 定義 JSON 數據的 TypeScript 類型
interface ListItem {
    fid: number;
    nsg: {
        sc: number[];
        tyg: number;
        pe: number;
    }[];
    ty: number;
    ms: number;
    ye: string;
    sid: number;
    bt: number;
    as: string[];
    mc: {
        pe: number;
    };
    ne: number;
    mg: any[];
    tms: number;
    lg: {
        lurl: string;
        na: string;
        or: number;
        id: number;
        sid: number;
    };
    id: number;
    vs: any;
    ts: {
        lurl: string;
        na: string;
        id: number;
    }[];
    nm: string;
}

interface Data {
    current: number;
    total: number;
    size: number;
    pageTotal: number;
    records: ListItem[];
}

interface GetListResponse {
    code: number;
    data: Data;
    success: boolean;
}

// 將 JSON 數據賦給 TypeScript 對象
export const getListResponse: GetListResponse = {
    "code": 0,
    "data": {
        "current": 1,
        "total": 1,
        "size": 50,
        "pageTotal": 1,
        "records": [
            {
                "fid": 3,
                "nsg": [
                    {
                        "sc": [2, 6],
                        "tyg": 5,
                        "pe": 2000
                    },
                    {
                        "sc": [1, 2],
                        "tyg": 5,
                        "pe": 2001
                    }
                ],
                "ty": 2,
                "ms": 5,
                "ye": "",
                "sid": 2,
                "bt": 1634047200000,
                "as": [
                    "https://animation.fb6pro.com/animation/index.html?matchId=28504184"
                ],
                "mc": {
                    "pe": 2006
                },
                "ne": 0,
                "mg": [],
                "tms": 1,
                "lg": {
                    "lurl": "",
                    "na": "MHL",
                    "or": 1000,
                    "id": 38841,
                    "sid": 2
                },
                "id": 422476,
                "vs": {},
                "ts": [
                    {
                        "lurl": "",
                        "na": "Reaktor Nizhnekamsk",
                        "id": 563798
                    },
                    {
                        "lurl": "",
                        "na": "Omskie Yastreby",
                        "id": 563816
                    }
                ],
                "nm": "Reaktor Nizhnekamsk vs. Omskie Yastreby"
            }
        ]
    },
    "success": true
};

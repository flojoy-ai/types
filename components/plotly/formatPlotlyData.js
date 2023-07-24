const NUM_OF_COLUMNS = 2;
const NUM_OF_ROWS = 20;
const MATRIX_COLUMNS = 4;
export const makePlotlyData = (data, theme, isThumbnail) => {
    const headerFillColor = theme === "light" ? "#ffffff" : "#191919";
    const cellFillColor = "transparent";
    const matrixFontColor = theme === "dark" ? "#f8f9fa" : "#111111";
    const accentColor = theme === "dark" ? "#99f5ff" : "#7b61ff";
    return data.map((d, d_index) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return Object.assign(Object.assign(Object.assign({}, d), (d.type === "table" && Object.assign(Object.assign({}, d), { header: Object.assign(Object.assign({}, d.header), { align: "center", values: isThumbnail
                    ? (_b = (_a = d.header) === null || _a === void 0 ? void 0 : _a.values) === null || _b === void 0 ? void 0 : _b.filter((_, i) => i < NUM_OF_COLUMNS)
                    : (_c = d.header) === null || _c === void 0 ? void 0 : _c.values, fill: {
                    color: ((_e = (_d = d.header) === null || _d === void 0 ? void 0 : _d.values) === null || _e === void 0 ? void 0 : _e.length) ? headerFillColor : "transparent",
                } }), cells: Object.assign(Object.assign(Object.assign(Object.assign({}, d.cells), { align: "center", values: isThumbnail
                    ? (_g = (_f = d.cells) === null || _f === void 0 ? void 0 : _f.values) === null || _g === void 0 ? void 0 : _g.filter((_, i) => {
                        var _a;
                        return i <
                            (((_a = d.header) === null || _a === void 0 ? void 0 : _a.values.length) ? NUM_OF_COLUMNS : MATRIX_COLUMNS);
                    }).map((i) => i === null || i === void 0 ? void 0 : i.filter((_, index) => {
                        var _a;
                        return index <
                            (((_a = d.header) === null || _a === void 0 ? void 0 : _a.values.length) ? NUM_OF_ROWS : MATRIX_COLUMNS);
                    }))
                    : (_h = d.cells) === null || _h === void 0 ? void 0 : _h.values, fill: {
                    color: cellFillColor,
                } }), (!((_k = (_j = d.header) === null || _j === void 0 ? void 0 : _j.values) === null || _k === void 0 ? void 0 : _k.length) && {
                font: { color: matrixFontColor },
            })), (isThumbnail && {
                height: 40,
            })) }))), (d_index === 0 && {
            marker: Object.assign(Object.assign({}, d.marker), { color: accentColor }),
            line: Object.assign(Object.assign({}, d.line), { color: accentColor }),
        }));
    });
};
export const dataContainer2Plotly = ({ dataContainer, plotType, plotMode, theme, fig, }) => {
    var _a, _b;
    const headerFillColor = theme === "light" ? "#ffffff" : "#191919";
    const cellFillColor = "transparent";
    switch (dataContainer.type) {
        // TODO: This match is not exausitive, missing matrix and grayscale
        case "scalar": {
            return [
                {
                    x: dataContainer.c,
                    type: plotType,
                    mode: plotMode,
                },
            ];
        }
        case "ordered_pair": {
            return [
                {
                    x: dataContainer.x,
                    y: dataContainer.y,
                    type: plotType,
                    mode: plotMode,
                },
            ];
        }
        case "ordered_triple": {
            return [
                {
                    x: dataContainer.x,
                    y: dataContainer.y,
                    z: dataContainer.z,
                    type: plotType,
                    mode: plotMode,
                },
            ];
        }
        case "dataframe": {
            const df = JSON.parse(dataContainer.m || "");
            const headerValues = Object.keys(df);
            const cellValues = Object.values(df).map((value) => Object.values(value));
            return [
                {
                    type: "table",
                    header: {
                        values: headerValues,
                        fill: {
                            color: headerFillColor,
                        },
                    },
                    cells: {
                        values: cellValues,
                        fill: {
                            color: cellFillColor,
                        },
                    },
                },
            ];
        }
        case "image":
            return fig;
        case "plotly": {
            return (((_b = (_a = dataContainer.fig) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.map((d) => (Object.assign(Object.assign({}, d), { header: Object.assign(Object.assign({}, d.header), { align: "center", fill: {
                        color: headerFillColor,
                    } }), cells: Object.assign(Object.assign({}, d.cells), { align: "center", fill: {
                        color: cellFillColor,
                    } }) })))) || []);
        }
        default:
            console.log("Unknown data type!!");
            return [];
    }
};

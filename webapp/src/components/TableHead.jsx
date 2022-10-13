const TableHead = ({ items = [] }) => {
    return (

        <tr className="table-header" style={{
            background: "#f5f2f4",
            marginTop: "102px",
            height: "4.4vh",
            overflowX: "scroll",
            width: "100%",
            position: "sticky",
            top: "0"
        }}   >
            {
                items.map((e, i) => {
                    if (i === items.length + 3) {
                        <th scope="">{e}</th>;
                    }
                    if (i === 0) {
                        return (
                            <th
                                style={{
                                    // paddingLeft: "13px",
                                    // marginLeft: "7px",
                                    width: "0px",
                                }}
                                className="col- "
                            >
                                {e}
                            </th>
                        );
                    } else return <th scope="">{e}</th>;
                })
            }
        </tr >
    );
};
export default TableHead;

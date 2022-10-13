import horLicks from "../../../assets/temp/horlicks.png"
const TopSellingProducts = () => {
    return <div className="col-md-4 col-12   recent-order-main p-3" style={{
        overflow: "hidden"
    }}>
        <h5>
            Top Selling Product
        </h5>
        {
            [1, 2, 3, 6].map((e) => <div key={e} className="my-4 top-selling-product-card">
                <div>

                    <img src={horLicks} alt="Horlicks" width={40} />
                    <h6 className=" mx-3">Horlicks 500gm 0932XIK</h6>
                </div>
                <h5>300 Sales</h5>
            </div>)
        }
    </div>;
};
export default TopSellingProducts;
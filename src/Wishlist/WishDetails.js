import React from 'react';

function WishDetails(props) {
    const renderWishlist = ({ sendwish }) => {
        if (sendwish) {
            return sendwish.map((item) => {
                return (
                    <table key={Math.random()} class="table table-striped">
                        <tbody>
                            <tr>
                                <td>{item.item_id}</td>
                                <td>{item.product_name}</td>
                                <td>{item.category}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            })
        }
    }
    return (
        <div>
            {renderWishlist(props)}
        </div>
    );
}

export default WishDetails;
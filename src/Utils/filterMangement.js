export const getFilterProducts = ({ userinfo, defaultProducts, dispatch, setFilterProducts, resetFilterProducts }) => {
    const { price, type, gender, color } = userinfo;
    let products = [];
    let checkProducts = defaultProducts;
    if (color.length == 0 && type.length == 0 && gender.length == 0 && price.length == 0) {
        dispatch(resetFilterProducts());
    } else {
        if (price.length > 0) {
            products = checkProducts.filter(product => {
                if ((price.includes('500') && product.price > 450) && (price.includes('250') && (product.price <= 250)) && (price.includes('450') && (product.price <= 450 && product.price > 250))) {
                    if (type.includes(product.type) && gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && gender.includes(product.gender)) return true;
                    else if (gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && color.includes(product.color)) return true;
                    else if (type.includes(product.type)) return true;
                    else if (gender.includes(product.gender)) return true;
                    else if (color.includes(product.color)) return true;
                    else return true;
                }
                if ((price.includes('250') && (product.price <= 250)) && (price.includes('450') && (product.price <= 450 && product.price > 250))) {
                    if (type.includes(product.type) && gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && gender.includes(product.gender)) return true;
                    else if (gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && color.includes(product.color)) return true;
                    else if (type.includes(product.type)) return true;
                    else if (gender.includes(product.gender)) return true;
                    else if (color.includes(product.color)) return true;
                    else return true;
                }
                if ((price.includes('500') && product.price > 450) && (price.includes('450') && (product.price <= 450 && product.price > 250))) {
                    if (type.includes(product.type) && gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && gender.includes(product.gender)) return true;
                    else if (gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && color.includes(product.color)) return true;
                    else if (type.includes(product.type)) return true;
                    else if (gender.includes(product.gender)) return true;
                    else if (color.includes(product.color)) return true;
                    else return true;
                }
                if ((price.includes('500') && product.price > 450) && (price.includes('250') && (product.price <= 250))) {
                    if (type.includes(product.type) && gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && gender.includes(product.gender)) return true;
                    else if (gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && color.includes(product.color)) return true;
                    else if (type.includes(product.type)) return true;
                    else if (gender.includes(product.gender)) return true;
                    else if (color.includes(product.color)) return true;
                    else return true;
                }
                if ((price.includes('500') && product.price > 450)) {
                    if (type.includes(product.type) && gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && gender.includes(product.gender)) return true;
                    else if (gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && color.includes(product.color)) return true;
                    else if (type.includes(product.type)) return true;
                    else if (gender.includes(product.gender)) return true;
                    else if (color.includes(product.color)) return true;
                    else return true;
                }
                if ((price.includes('450') && (product.price <= 450 && product.price > 250))) {
                    if (type.includes(product.type) && gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && gender.includes(product.gender)) return true;
                    else if (gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && color.includes(product.color)) return true;
                    else if (type.includes(product.type)) return true;
                    else if (gender.includes(product.gender)) return true;
                    else if (color.includes(product.color)) return true;
                    else return true;
                }
                if ((price.includes('250') && (product.price <= 250))) {
                    if (type.includes(product.type) && gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && gender.includes(product.gender)) return true;
                    else if (gender.includes(product.gender) && color.includes(product.color)) return true;
                    else if (type.includes(product.type) && color.includes(product.color)) return true;
                    else if (type.includes(product.type)) return true;
                    else if (gender.includes(product.gender)) return true;
                    else if (color.includes(product.color)) return true;
                    else return true;
                }
            })
        } else {
            products = checkProducts.filter(product => {
                if (type.includes(product.type) && gender.includes(product.gender) && color.includes(product.color)) return true;
                else if (type.includes(product.type) && gender.includes(product.gender)) return true;
                else if (gender.includes(product.gender) && color.includes(product.color)) return true;
                else if (type.includes(product.type) && color.includes(product.color)) return true;
                else if (type.includes(product.type)) return true;
                else if (gender.includes(product.gender)) return true;
                else if (color.includes(product.color)) return true;
                else return false;
            })
        }
        dispatch(setFilterProducts(products));
    }

}
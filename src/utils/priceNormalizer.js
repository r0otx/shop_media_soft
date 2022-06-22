const priceNormalizer = (num) => {
    return '$' + num.toFixed(2).replace('.', ',');
}

export default priceNormalizer;
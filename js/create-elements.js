export function createElements(product) {  
    const thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");

    const image = document.createElement("img");
    // image.src = `${product.imageUrl}`;
    image.setAttribute("src", product.imageUrl);
    image.setAttribute("alt", product.imageAlt);

    thumbnail.appendChild(image);

    const productDetails = document.createElement("div");
    productDetails.classList.add("thumbnail__product-details");

    const productTitle = document.createElement("h2");
    productTitle.innerText = product.name;

    const productPrice = document.createElement("p");
    // productPrice.innerText = product.price;
    productPrice.innerText = `US$ ${product.price.toLocaleString("en-US", {minimumFractionDigits: 2})}`;

    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerText = "Buy Now";

    productDetails.appendChild(productTitle);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(link);

    thumbnail.appendChild(productDetails);

    return thumbnail;
}

export function moveToLastPosition(parent, thumbnail) {
	if(thumbnail.getBoundingClientRect().x < -300) {
		thumbnail.remove();
        console.log("tag removed");
		parent.appendChild(thumbnail);
        console.log("tag appended");
	}
}
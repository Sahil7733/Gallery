
let currentPage = 1;

function fetchImages(page) {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`)
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('gallery');
            data.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.download_url;
                imgElement.alt = image.author;
                gallery.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}

document.getElementById('loadMore').addEventListener('click', () => {
    currentPage++;
    fetchImages(currentPage);
});


fetchImages(currentPage);

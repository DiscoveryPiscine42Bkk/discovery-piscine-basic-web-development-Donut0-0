const backgrounds = [
    'https://media.istockphoto.com/id/526259891/photo/cake-display.jpg?s=612x612&w=0&k=20&c=-o0yToBC-ikohpFQu-gBCKS3KD51bjk6RDBj32jfMsg=',
    'https://cdn.shopify.com/s/files/1/0521/3929/4884/files/Website_0dd87541-d1d6-445b-a04c-32d2f6039049_480x480.jpg?v=1655357449',
    'https://canberradaily.com.au/wp-content/uploads/2022/06/Canberra-best-cake-shops.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepJRIKd7MIsQzYrCWTh1MQE6sTalka9ChYg&s'
];

let current = 0;

function changeBackground() {
    current = (current + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[current]}')`;
}
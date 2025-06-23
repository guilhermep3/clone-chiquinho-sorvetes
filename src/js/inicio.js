const istagramPosts = document.querySelector('.instagram-posts');
const allPosts = document.querySelectorAll('.ig-post');

const postsLinks = [
  {
    link: "https://www.instagram.com/p/DKuYFoXIL5C/",
    image: "https://www.chiquinho.com.br/wp-content/uploads/sb-instagram-feed-images/505166684_18506899996003472_616386632244115077_nfull.webp"
  },
  {
    link: "https://www.instagram.com/reel/DKry4byO9dw/",
    image: "https://www.chiquinho.com.br/wp-content/uploads/sb-instagram-feed-images/503936538_18506148583003472_8279332350193553823_nfull.webp"
  },
  {
    link: "https://www.instagram.com/p/DKpOU8BOEhf/",
    image: "https://www.chiquinho.com.br/wp-content/uploads/sb-instagram-feed-images/505121858_18506536993003472_7143685996594874532_nfull.webp"
  },
  {
    link: "https://www.instagram.com/reel/DKmpUO6OabO/",
    image: "https://www.chiquinho.com.br/wp-content/uploads/sb-instagram-feed-images/502948234_18504770260003472_414934302224449650_nfull.webp"
  },
  {
    link: "https://www.instagram.com/reel/DKkEfNzu41Z/",
    image: "https://www.chiquinho.com.br/wp-content/uploads/sb-instagram-feed-images/501377064_18504770092003472_6489338784154671809_nfull.webp"
  },
  {
    link: "https://www.instagram.com/p/DKhf80CopMm/",
    image: "https://www.chiquinho.com.br/wp-content/uploads/sb-instagram-feed-images/503509624_18505913893003472_74471304549383650_nfull.webp"
  }
];

function addPosts(){
  postsLinks.map((p) => {
    const a = document.createElement("a");
    a.classList.add("ig-post");
    a.href = p.link;
    a.target = "_blank";

    const isVideo = p.link.includes('reel');
    if (isVideo) {
      a.classList.add('post-video');
      const icon = document.createElement("i");
      icon.classList.add("fa-solid", "fa-play");
      a.append(icon);
    }

    const imageTag = document.createElement("img");
    imageTag.src = p.image;
    imageTag.alt = 'Post instagram sorveteria';

    a.append(imageTag)
    istagramPosts.append(a);
  })
}

addPosts();
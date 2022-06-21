const dogs = [
  {
    id: 1,
    name: "Max",
    phone: "123-321-1111",
    email: "max@gmail.com",
    image: {
      url: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60",
      alt: "a brown dog",
    },
    favoured: false,
    color: "brown",
    sex: "male",
  },
  {
    id: 2,
    name: "Bella",
    phone: "321-222-111",
    email: "bella@google.com",
    image: {
      url: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80",
      alt: "a beautiful corgi pup",
    },
    favoured: false,
    color: "red & white",
    sex: "female",
  },
  {
    id: 3,
    name: "Daisy",
    phone: "312-433-3533",
    email: "alexei@mail.ru",
    image: {
      url: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
      alt: "beautiful cat",
    },
    favoured: false,
    color: "fawn",
    sex: "female",
  },
  {
    id: 4,
    name: "Teddy",
    phone: "456-666-4774",
    email: "roosevelt@gmail.com",
    image: {
      url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      alt: "a sweet little bulldog",
    },
    favoured: false,
    color: "fawn",
    sex: "male",
  },
];

module.exports = {
  dogs,
};

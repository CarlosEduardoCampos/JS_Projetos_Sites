const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

scrollRevealOption().reveal(".header_image img", {
    ...scrollRevealOption,
    origin:"right",
});

scrollRevealOption().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay:500,
});

scrollRevealOption().reveal(".header_content p", {
    ...scrollRevealOption,
    delay:500,
});

scrollRevealOption().reveal(".header_content form", {
    ...scrollRevealOption,
    delay:500,
});
gsap.from("#how_can_we_help", {
  scrollTrigger: "#how_can_we_help .helpful_items", 
  x: window.innerWidth,
  duration: 0.75
});

gsap.from("#what_do_our_clients_say", {
  scrollTrigger: "#what_do_our_clients_say .client_container", 
  x: window.innerWidth * -1,
  duration: 0.75
});

gsap.from("#our_story", {
  scrollTrigger: "#our_story p", 
  x: window.innerWidth,
  duration: 0.75
});

gsap.from("#meet_the_team", {
  scrollTrigger: "#meet_the_team .grid", 
  x: window.innerWidth * -1,
  duration: 0.75
});
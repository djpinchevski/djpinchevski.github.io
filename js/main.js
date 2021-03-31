gsap.from("#how_can_we_help", {
  scrollTrigger: "#how_can_we_help .helpful_items", 
  x: 1000,
  duration: 1.5,
  start: "center bottom"
});

gsap.from("#what_do_our_clients_say", {
  scrollTrigger: "#what_do_our_clients_say .client_container", 
  x: -1000,
  duration: 1.5,
  start: "center bottom"
});

gsap.from("#our_story", {
  scrollTrigger: "#our_story p", 
  x: 1000,
  duration: 1.5,
  start: "center bottom"
});

gsap.from("#meet_the_team", {
  scrollTrigger: "#meet_the_team .grid", 
  x: -1000,
  duration: 1.5,
  start: "center bottom"
});
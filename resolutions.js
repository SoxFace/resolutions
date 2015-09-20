if (Meteor.isClient) {
  Template.body.helpers({
    resolutions: [
      { title: "Hello Resolutions #1" },
      { title: "Bye Resolutions #2" },
      { title: "Kanye Resolutions #3" }
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

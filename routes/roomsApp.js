const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("rooms", { page_name: "rooms" });
});

let douglasD = {
  roomName: "Royal Douglas & Malcom Suites",
  price: "15,000",
  Slug: "douglas",
  mainImg: "douglasRoomCover.webp",
  subImg: "douglasSuit",
  subImgCount: 6,
  text: "<p>Wake-Up to the scenic views of the tea estate as you roam the peaceful corridors with wooden flooring, private fireplaces, walk-in closets, and other amenities. Located on the first floor, these rooms provide a view of the mighty Kanchenjunga Mountains.</p><h4>Royal Douglas Suite</h4><p>A beautiful suite room in the first floor of the bungalow having polished wooden flooring and well decorated with hand picked antique furnishes. Carefully selected light colour upholstery creates an amazing ambiance of the room.The recently renovated toilet with a bathtub and attached dressing room will remind you of luxury of bygone days.</p><h4>Malcom Lamond Suite</h4><p>An amazing suite with wooden floor and private balcony with colourful upholstery and a most spacious and lavish bathroom with bathtub decorated tastefully to re-create old world charm.The fire place gives the most comfortable and romantic feel to make your stay most memorable.</p>",
};

router.get("/douglas", function (req, res) {
  res.render("roomsOne", { page_name: "roomsOne", data: douglasD });
});

let deluxeD = {
  roomName: "Hunter Arundall Suite",
  price: "15,000",
  Slug: "deluxe",
  mainImg: "arundallRoomCover.webp",
  subImgCount: 4,
  text: "<p>Located on the first floor, this room has the best views of the Kanchenjunga Mountains, the tea estate, and the bungalow gardens, all at once. Fitted with teak furniture alongside all amenities, relax in the comfort of this suit.</p> <p>One of the most beautiful suite in the first floor of Baradighi the Bungalow decorated very elegantly With antique teakwood furniture which compliments the white colour upholstery and carefully sourced artifacts,</p>",
  subImg: "arundallSuit",
};

router.get("/deluxe", function (req, res) {
  res.render("roomsOne", { page_name: "rooms", data: deluxeD });
});

let royalD = {
  roomName: "I.F Morris Suite",
  price: "17,500",
  Slug: "royal",
  mainImg: "RoyalRoomCover.webp",
  subImg: "royalSuit",
  subImgCount: 6,
  text: "The crown jewel of the hotel, this room shows the luxuries of the past era in full display. A spacious 800 Square Feet room with a walk-in closet, bathtub, seating area & a fireplace among other amenities. This room also has a magnificent sunrise view, overlooking the grand old estate. ",
};

router.get("/royal", function (req, res) {
  res.render("roomsOne", { page_name: "rooms", data: royalD });
});

let georgeD = {
  roomName: "Tillabari & George Micknly Suites",
  price: "15,000",
  Slug: "george",
  mainImg: "MckinlyHeader.webp",
  subImgCount: 2,
  text: "With views of the bungalow gardens, you can hear the birds chirping in the early morning hours.  Located on the ground floor, these rooms have easy accessibility and have a dressing area, bathtubs, seating areas among other amenities. ",
  subImg: "georgeSuit",
};

router.get("/george", function (req, res) {
  res.render("roomsOne", { page_name: "rooms", data: georgeD });
});

let villaD = {
  roomName: "Baradighi Wellness Villa",
  price: "12,000",
  Slug: "villa",
  subImgCount: 4,
  text: "These rooms are located next to the Baradighi Bungalow and have an exclusive decked garden, games room, kitchen, and beautiful wooden furnishings. The Wellness Villa can be booked as a private bungalow for Rs. 25,000 + Taxes. ",
  mainImg: "villaCover.webp",
  subImg: "villaOnes",
};

router.get("/villa", function (req, res) {
  res.render("roomsOne", { page_name: "rooms", data: villaD });
});

module.exports = router;

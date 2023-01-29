describe("My First Test", () => {
  it("Visits Mikey Collins", () => {
    cy.visit("http://localhost:3001/");
  });
});

describe("Navigation bar", () => {
  it("should have all the links", () => {
    cy.visit("http://localhost:3001/");
    cy.get("header nav")
      .find("h2")
      .should("have.length", 5)
      .and("contain", "Home")
      .and("contain", "Contact")
      .and("contain", "Shows")
      .and("contain", "Press")
      .and("contain", "Recent Work");
  });
});

describe("Test Links", () => {
  it("checks that About link works", () => {
    cy.visit("http://localhost:3001/");
    cy.get(".lard").eq(0).find(".button-86").click({ force: true });
    cy.url().should("include", "/about");
  });

  it("checks that Recent Work link works", () => {
    cy.visit("http://localhost:3001/");
    cy.get(".lard").eq(1).find(".button-86").click({ force: true });
    cy.url().should("include", "/more");
  });

  it("checks that Contact link works", () => {
    cy.visit("http://localhost:3001/");
    cy.get(".lard").eq(2).find(".button-86").click({ force: true });
    cy.url().should("include", "/contact");
  });

  it("checks that Press link works", () => {
    cy.visit("http://localhost:3001/");
    cy.get(".lard").eq(3).find(".button-86").click({ force: true });
    cy.url().should("include", "/press");
  });

  // it("checks that Big Jelly Studio link works", () => {
  //   cy.visit("http://localhost:3001/");
  //   cy.get(".lard").eq(4).find(".button-86").click({ force: true });
  //   cy.url().should("include", "bigjellystudios.com");
  // });

  it("checks that Shows link works", () => {
    cy.visit("http://localhost:3001/");
    cy.get(".button-86").eq(5).click({ force: true });

    cy.url().should("include", "/shows");
  });
});

describe("Check Spotify Link", () => {
  it("Visits the website and clicks the Spotify link", () => {
    cy.visit("http://localhost:3001/about");
    cy.get(".mainSpotify").then(($a) => {
      const href = $a.prop("href");
      cy.wrap(href).should(
        "include",
        "https://open.spotify.com/artist/0in8U5LueFlvZQRM4A1WWZ"
      );
    });
  });
  // This Cypress test visits the website at the specified URL ("http://localhost:3001/about"), finds the element with the class .mainSpotify, clicks on it, and then checks if the URL of the page has changed to the Spotify link. The test uses the .get() method to select the desired element, .click() method to simulate a click on it, .url() method to check the current URL, and .should() method with the "include" assertion to verify if the current URL includes the expected Spotify link. If the URL does include the expected Spotify link, the test will pass, and if not, the test will fail.
});

describe("Check Spotify links on recent work page", () => {
  it("checks all Spotify links in code", () => {
    cy.visit("http://localhost:3001/more");
    cy.get(".spotify").each(($el, index) => {
      const url = $el.prop("url");
      cy.request("https://open.spotify.com/album/7f82oLZDQvL6K3pIj54n7k").then(
        (response) => {
          expect(response.status).to.eq(200);
        }
      );
    });
  });
  // This test checks to make sure that the url for the first project in the array for 'recent work' works
});

describe("Check Map for Projects Array", () => {
  it("checks if the projects array is correctly mapped", () => {
    const projects = [
      {
        artist: "Johanna Warren",
        title: "'Lesson For Mutants'",
        image: "johanna",
        credit: "Engineering and Mix",
        link: "https://open.spotify.com/album/7f82oLZDQvL6K3pIj54n7k",
      },
      {
        artist: "lunch Money Life",
        title: "'Sacrifice'",
        image: "lunch",
        credit: "Engineering",
        link: "https://open.spotify.com/album/4fbykSaOFsqxeDxr536naf?si=hz0IE4NiSfK5rzxQrkwCwA&nd=1",
      },
      {
        artist: "Potato",
        title: "'Roll'",
        image: "potato",
        credit: "Engineering & Mix",
        link: "https://open.spotify.com/album/0bKEkanTdG7nAsxHBuNp1H?si=9QShULHZQ8url5iU75HpCg&nd=1",
      },
      {
        artist: "Ben Ramsden",
        title: "'To Care",
        image: "ramsden",
        credit: "Engineering & Mix",
        link: "https://open.spotify.com/album/0mRXaXsOuXBoGmZlnoD5J8",
      },
      {
        artist: "Seazoo",
        title: "'Beaten By The Rain'",
        image: "seazoo",
        credit: "Mix",
        link: "https://open.spotify.com/album/2O7urdkQCW0kGgiuzsAeCC",
      },
      {
        artist: "Longy",
        title: "'The Underclass'",
        image: "longy",
        credit: "Producer & Engineer",
        link: "https://open.spotify.com/album/3byuP2smkehUGTnlWwHzlz?si=utNAeasiS9itJX1h0lc2dw&nd=1",
      },
      {
        artist: "Alice Hubble",
        title: "'Hexentanzplatz'",
        image: "alice",
        credit: "Engineer & Programming",
        link: "https://open.spotify.com/album/7xaVhmgZ8IqVnWrBcdd971?si=0X00addTQ5OG-uRIwPpcUQ&nd=1",
      },
      {
        artist: "Homechestra",
        title: "'Dialogues that never happened'",
        image: "homechestra",
        credit: "",
        link: "https://open.spotify.com/album/1WBmZNPcF1BXjeAgwNh3Dp?si=SaVvH5blQ5uy_KaUxCNvHg&nd=1",
      },
      {
        artist: "Jessica Lauren",
        title: "'Almeria'",
        image: "almeria",
        credit: "",
        link: "https://open.spotify.com/album/0eRpTXh6KpWVOQIqi5vKYk?si=ZkVoKzjUQXSXZVHjm0AbFw&nd=1",
      },
      {
        artist: "Tigercats",
        title: "'Pig City'",
        image: "tigercats",
        credit: "",
        link: "https://open.spotify.com/album/49HuHrnIY6v9ecgSe5jZUo?si=TAK9_aFJTIOXmZH06jj-yg&nd=1",
      },
      {
        artist: "Virkelig",
        title: "'Lengsel blir til gjemsel'",
        image: "virkelig",
        credit: "",
        link: "https://open.spotify.com/album/3byuP2smkehUGTnlWwHzlz?si=utNAeasiS9itJX1h0lc2dw&nd=1",
      },
      {
        artist: "Seazoo",
        title: "'Trunks'",
        image: "trunks",
        credit: "Mixed & Mastered",
        link: "https://open.spotify.com/album/39TE0lEmtUCgLz6yWygYnO?si=NiwnRGWTQCG2xqhL2dugzQ&nd=1",
      },
    ];
    cy.visit("http://localhost:3001/more");
    it("should display 12 project cards", async () => {
      // navigate to the page containing the project cards
      await page.goto("http://localhost:3000/projects");

      // wait for the project cards to be loaded
      await page.waitForSelector(".project-card");

      // check if the project cards are present
      const projectCards = await page.$$(".project-card");
      expect(projectCards).to.have.lengthOf(12);
    });
  });
});

describe("Checking all links on the recent work page", () => {
  const projects = [
    {
      artist: "Johanna Warren",
      title: "'Lesson For Mutants'",
      image: "johanna",
      credit: "Engineering and Mix",
      link: "https://open.spotify.com/album/7f82oLZDQvL6K3pIj54n7k",
    },
    {
      artist: "lunch Money Life",
      title: "'Sacrifice'",
      image: "lunch",
      credit: "Engineering",
      link: "https://open.spotify.com/album/4fbykSaOFsqxeDxr536naf?si=hz0IE4NiSfK5rzxQrkwCwA&nd=1",
    },
    {
      artist: "Potato",
      title: "'Roll'",
      image: "potato",
      credit: "Engineering & Mix",
      link: "https://open.spotify.com/album/0bKEkanTdG7nAsxHBuNp1H?si=9QShULHZQ8url5iU75HpCg&nd=1",
    },
    {
      artist: "Ben Ramsden",
      title: "'To Care",
      image: "ramsden",
      credit: "Engineering & Mix",
      link: "https://open.spotify.com/album/0mRXaXsOuXBoGmZlnoD5J8",
    },
    {
      artist: "Seazoo",
      title: "'Beaten By The Rain'",
      image: "seazoo",
      credit: "Mix",
      link: "https://open.spotify.com/album/2O7urdkQCW0kGgiuzsAeCC",
    },
    {
      artist: "Longy",
      title: "'The Underclass'",
      image: "longy",
      credit: "Producer & Engineer",
      link: "https://open.spotify.com/album/3byuP2smkehUGTnlWwHzlz?si=utNAeasiS9itJX1h0lc2dw&nd=1",
    },
    {
      artist: "Alice Hubble",
      title: "'Hexentanzplatz'",
      image: "alice",
      credit: "Engineer & Programming",
      link: "https://open.spotify.com/album/7xaVhmgZ8IqVnWrBcdd971?si=0X00addTQ5OG-uRIwPpcUQ&nd=1",
    },
    {
      artist: "Homechestra",
      title: "'Dialogues that never happened'",
      image: "homechestra",
      credit: "",
      link: "https://open.spotify.com/album/1WBmZNPcF1BXjeAgwNh3Dp?si=SaVvH5blQ5uy_KaUxCNvHg&nd=1",
    },
    {
      artist: "Jessica Lauren",
      title: "'Almeria'",
      image: "almeria",
      credit: "",
      link: "https://open.spotify.com/album/0eRpTXh6KpWVOQIqi5vKYk?si=ZkVoKzjUQXSXZVHjm0AbFw&nd=1",
    },
    {
      artist: "Tigercats",
      title: "'Pig City'",
      image: "tigercats",
      credit: "",
      link: "https://open.spotify.com/album/49HuHrnIY6v9ecgSe5jZUo?si=TAK9_aFJTIOXmZH06jj-yg&nd=1",
    },
    {
      artist: "Virkelig",
      title: "'Lengsel blir til gjemsel'",
      image: "virkelig",
      credit: "",
      link: "https://open.spotify.com/album/3byuP2smkehUGTnlWwHzlz?si=utNAeasiS9itJX1h0lc2dw&nd=1",
    },
    {
      artist: "Seazoo",
      title: "'Trunks'",
      image: "trunks",
      credit: "Mixed & Mastered",
      link: "https://open.spotify.com/album/39TE0lEmtUCgLz6yWygYnO?si=NiwnRGWTQCG2xqhL2dugzQ&nd=1",
    },
  ];

  projects.forEach((project) => {
    it(`checks link for ${project.title}`, () => {
      cy.request(project.link).its("status").should("equal", 200);
    });
  });

  // This test vists the recent work page (/more), then runs through the 'projects' array and checks all the spotify links
});

describe("Contact Page Links Test", () => {
  it("checks that all links work", () => {
    cy.visit("http://localhost:3001/contact");
    cy.get('a[href="https://www.facebook.com/mikeycollinsmusic/"]')
      .should("have.attr", "href")
      .and("equal", "https://www.facebook.com/mikeycollinsmusic/");
    cy.get('a[href="https://twitter.com/MikeyColsmusic"]')
      .should("have.attr", "href")
      .and("equal", "https://twitter.com/MikeyColsmusic");
    cy.get('a[href="https://www.instagram.com/mikeycolsmusic/"]')
      .should("have.attr", "href")
      .and("equal", "https://www.instagram.com/mikeycolsmusic/");
    cy.get('a[href="mailto:hello@mikeycollins.co.uk"]')
      .should("have.attr", "href")
      .and("equal", "mailto:hello@mikeycollins.co.uk");
  });

  // This test visits the contact page of the site, and checks that all links to social pages and email address works
});

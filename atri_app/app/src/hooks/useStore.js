import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Body": {
      "callbacks": {}
    },
    "Flex819": {
      "callbacks": {}
    },
    "Flex833": {
      "callbacks": {}
    },
    "Flex832": {
      "callbacks": {}
    },
    "Flex831": {
      "callbacks": {}
    },
    "Div380": {
      "callbacks": {}
    },
    "Div381": {
      "callbacks": {}
    },
    "Div382": {
      "callbacks": {}
    },
    "Div383": {
      "callbacks": {}
    },
    "Div384": {
      "callbacks": {}
    },
    "Div385": {
      "callbacks": {}
    },
    "Flex856": {
      "callbacks": {}
    },
    "Flex854": {
      "callbacks": {}
    },
    "Flex849": {
      "callbacks": {}
    },
    "Flex850": {
      "callbacks": {}
    },
    "Flex843": {
      "callbacks": {}
    },
    "Flex837": {
      "callbacks": {}
    },
    "Flex844": {
      "callbacks": {}
    },
    "Flex838": {
      "callbacks": {}
    },
    "Flex845": {
      "callbacks": {}
    },
    "Flex839": {
      "callbacks": {}
    },
    "Flex855": {
      "callbacks": {}
    },
    "Flex851": {
      "callbacks": {}
    },
    "Flex846": {
      "callbacks": {}
    },
    "Flex840": {
      "callbacks": {}
    },
    "Flex834": {
      "callbacks": {}
    },
    "Flex852": {
      "callbacks": {}
    },
    "Flex847": {
      "callbacks": {}
    },
    "Flex841": {
      "callbacks": {}
    },
    "Flex835": {
      "callbacks": {}
    },
    "Flex853": {
      "callbacks": {}
    },
    "Flex848": {
      "callbacks": {}
    },
    "Flex842": {
      "callbacks": {}
    },
    "Flex836": {
      "callbacks": {}
    },
    "Div386": {
      "callbacks": {}
    },
    "Flex857": {
      "callbacks": {}
    },
    "Flex858": {
      "callbacks": {}
    },
    "Div387": {
      "callbacks": {}
    },
    "Flex859": {
      "callbacks": {}
    },
    "Flex860": {
      "callbacks": {}
    },
    "Div389": {
      "callbacks": {}
    },
    "Flex862": {
      "callbacks": {}
    },
    "Flex861": {
      "callbacks": {}
    },
    "Div388": {
      "callbacks": {}
    },
    "Div391": {
      "callbacks": {}
    },
    "Flex864": {
      "callbacks": {}
    },
    "Flex863": {
      "callbacks": {}
    },
    "Div390": {
      "callbacks": {}
    },
    "Flex870": {
      "callbacks": {}
    },
    "Flex867": {
      "callbacks": {}
    },
    "Flex865": {
      "callbacks": {}
    },
    "Flex866": {
      "callbacks": {}
    },
    "Flex868": {
      "callbacks": {}
    },
    "Flex869": {
      "callbacks": {}
    },
    "Carousel1": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image718": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox1268": {
      "custom": {
        "text": "Explore"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1269": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox1270": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox1271": {
      "custom": {
        "text": "Sign In"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button81": {
      "custom": {
        "text": "Become a TravelTeller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1312": {
      "custom": {
        "text": "Featured Posts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input112": {
      "custom": {
        "value": "",
        "placeholder": "Search"
      },
      "callbacks": {}
    },
    "TextBox1313": {
      "custom": {
        "text": "A community of travellers and story tellers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1304": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image757": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1305": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image758": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1306": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image759": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1307": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image760": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1308": {
      "custom": {
        "text": "India's People, Places and Events"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image761": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image762": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image763": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1309": {
      "custom": {
        "text": "Africa's People and Culture"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image764": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image765": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1310": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image766": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1311": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image767": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/home_page.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1332": {
      "custom": {
        "text": "Category Tags"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1333": {
      "custom": {
        "text": "Top Travellers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1329": {
      "custom": {
        "text": "Culture"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1330": {
      "custom": {
        "text": "Inspiration"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1331": {
      "custom": {
        "text": "Places"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image771": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1317": {
      "custom": {
        "text": "Natasha Miles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1318": {
      "custom": {
        "text": "Melbourne, Australia"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image772": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1319": {
      "custom": {
        "text": "Mason Miller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1320": {
      "custom": {
        "text": "Amsterdam, Netherlands"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image773": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1321": {
      "custom": {
        "text": "New York, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1322": {
      "custom": {
        "text": "Rachel Mindy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1334": {
      "custom": {
        "text": "Stories"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image774": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1323": {
      "custom": {
        "text": "Japan Like you've never seen it"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1324": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image768": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1314": {
      "custom": {
        "text": "Rachel Mindy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image775": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1325": {
      "custom": {
        "text": "India's Places and People"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1326": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image769": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1315": {
      "custom": {
        "text": "Mason Miller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image776": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1327": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1328": {
      "custom": {
        "text": "Africa's People and culture"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image770": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1316": {
      "custom": {
        "text": "Rachel Mindy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image777": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/signup-background.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1335": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1336": {
      "custom": {
        "text": "Sign up for our newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button83": {
      "custom": {
        "text": "Sign Up"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input113": {
      "custom": {
        "value": "",
        "placeholder": "Email Address*"
      },
      "callbacks": {}
    },
    "Input114": {
      "custom": {
        "value": "",
        "placeholder": "Last Name*"
      },
      "callbacks": {}
    },
    "Input115": {
      "custom": {
        "value": "",
        "placeholder": "First Name*"
      },
      "callbacks": {}
    },
    "Image778": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/signup-background.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1337": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1338": {
      "custom": {
        "text": "Sign up for our newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button84": {
      "custom": {
        "text": "Sign Up"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input116": {
      "custom": {
        "value": "",
        "placeholder": "Email Address*"
      },
      "callbacks": {}
    },
    "Input117": {
      "custom": {
        "value": "",
        "placeholder": "Last Name*"
      },
      "callbacks": {}
    },
    "Input118": {
      "custom": {
        "value": "",
        "placeholder": "First Name*"
      },
      "callbacks": {}
    },
    "Image783": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/celebrations.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button85": {
      "custom": {
        "text": "Get Started"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1339": {
      "custom": {
        "text": "Become a TravelTeller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1340": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image779": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image780": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image781": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image782": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image788": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/celebrations.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button86": {
      "custom": {
        "text": "Get Started"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1341": {
      "custom": {
        "text": "Become a TravelTeller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1342": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image784": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image785": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image786": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image787": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image793": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/celebrations.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image789": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.facebook.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image790": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.linkedin.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image791": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.twitter.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image792": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox1343": {
      "custom": {
        "text": "Videos"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/videos"
            }
          }
        ]
      }
    },
    "TextBox1344": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/blog"
            }
          }
        ]
      }
    },
    "TextBox1345": {
      "custom": {
        "text": "Places"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/places"
            }
          }
        ]
      }
    },
    "TextBox1346": {
      "custom": {
        "text": "TravelTellers"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/traveltellers"
            }
          }
        ]
      }
    },
    "TextBox1347": {
      "custom": {
        "text": "Terms & Conditions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/terms"
            }
          }
        ]
      }
    },
    "TextBox1348": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox1349": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox1350": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/privacy-policy"
            }
          }
        ]
      }
    }
  },
  "blog": {
    "Flex541": {
      "callbacks": {}
    },
    "Flex542": {
      "callbacks": {}
    },
    "Flex588": {
      "callbacks": {}
    },
    "Flex586": {
      "callbacks": {}
    },
    "Flex581": {
      "callbacks": {}
    },
    "Flex582": {
      "callbacks": {}
    },
    "Flex575": {
      "callbacks": {}
    },
    "Flex569": {
      "callbacks": {}
    },
    "Flex576": {
      "callbacks": {}
    },
    "Flex570": {
      "callbacks": {}
    },
    "Flex577": {
      "callbacks": {}
    },
    "Flex571": {
      "callbacks": {}
    },
    "Flex587": {
      "callbacks": {}
    },
    "Flex583": {
      "callbacks": {}
    },
    "Flex578": {
      "callbacks": {}
    },
    "Flex572": {
      "callbacks": {}
    },
    "Flex566": {
      "callbacks": {}
    },
    "Flex584": {
      "callbacks": {}
    },
    "Flex579": {
      "callbacks": {}
    },
    "Flex573": {
      "callbacks": {}
    },
    "Flex567": {
      "callbacks": {}
    },
    "Flex585": {
      "callbacks": {}
    },
    "Flex580": {
      "callbacks": {}
    },
    "Flex574": {
      "callbacks": {}
    },
    "Flex568": {
      "callbacks": {}
    },
    "Flex618": {
      "callbacks": {}
    },
    "Flex615": {
      "callbacks": {}
    },
    "Flex613": {
      "callbacks": {}
    },
    "Flex614": {
      "callbacks": {}
    },
    "Flex616": {
      "callbacks": {}
    },
    "Flex617": {
      "callbacks": {}
    },
    "Button58": {
      "custom": {
        "text": "Become a TravelTeller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox887": {
      "custom": {
        "text": "Sign In"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox888": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox889": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox890": {
      "custom": {
        "text": "Explore"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image401": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox930": {
      "custom": {
        "text": "Category Tags"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox931": {
      "custom": {
        "text": "Top Travellers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox927": {
      "custom": {
        "text": "Culture"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox928": {
      "custom": {
        "text": "Inspiration"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox929": {
      "custom": {
        "text": "Places"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image414": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox915": {
      "custom": {
        "text": "Natasha Miles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox916": {
      "custom": {
        "text": "Melbourne, Australia"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image415": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox917": {
      "custom": {
        "text": "Mason Miller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox918": {
      "custom": {
        "text": "Amsterdam, Netherlands"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image416": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox919": {
      "custom": {
        "text": "New York, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox920": {
      "custom": {
        "text": "Rachel Mindy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox932": {
      "custom": {
        "text": "Stories"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image417": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox921": {
      "custom": {
        "text": "Japan Like you've never seen it"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox922": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image411": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox912": {
      "custom": {
        "text": "Rachel Mindy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image418": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox923": {
      "custom": {
        "text": "India's Places and People"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox924": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image412": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox913": {
      "custom": {
        "text": "Mason Miller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image419": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox925": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox926": {
      "custom": {
        "text": "Africa's People and culture"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image413": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox914": {
      "custom": {
        "text": "Rachel Mindy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image444": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/celebrations.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image440": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.facebook.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image441": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.linkedin.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image442": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.twitter.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image443": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox965": {
      "custom": {
        "text": "Videos"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/videos"
            }
          }
        ]
      }
    },
    "TextBox966": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/blog"
            }
          }
        ]
      }
    },
    "TextBox967": {
      "custom": {
        "text": "Places"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/places"
            }
          }
        ]
      }
    },
    "TextBox968": {
      "custom": {
        "text": "TravelTellers"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/traveltellers"
            }
          }
        ]
      }
    },
    "TextBox969": {
      "custom": {
        "text": "Terms & Conditions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/terms"
            }
          }
        ]
      }
    },
    "TextBox970": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox971": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox972": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/privacy-policy"
            }
          }
        ]
      }
    }
  },
  "places": {
    "Places_Body": {
      "callbacks": {}
    },
    "Flex277": {
      "callbacks": {}
    },
    "Flex276": {
      "callbacks": {}
    },
    "Div174": {
      "callbacks": {}
    },
    "Div175": {
      "callbacks": {}
    },
    "Div176": {
      "callbacks": {}
    },
    "Div177": {
      "callbacks": {}
    },
    "Flex443": {
      "callbacks": {}
    },
    "Flex449": {
      "callbacks": {}
    },
    "Flex446": {
      "callbacks": {}
    },
    "Flex444": {
      "callbacks": {}
    },
    "Flex445": {
      "callbacks": {}
    },
    "Flex447": {
      "callbacks": {}
    },
    "Flex448": {
      "callbacks": {}
    },
    "TextBox458": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox459": {
      "custom": {
        "text": "Places of Interest"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox454": {
      "custom": {
        "text": "Sydney, Australia"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image168": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/place2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox455": {
      "custom": {
        "text": "Kashmir, India"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image169": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/place3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox456": {
      "custom": {
        "text": "Ko Samui, Thailand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image170": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/place4.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox457": {
      "custom": {
        "text": "Siwa Oasis, Egypt"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image171": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/place1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button43": {
      "custom": {
        "text": "Become a TravelTeller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox776": {
      "custom": {
        "text": "Sign In"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox777": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox778": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox779": {
      "custom": {
        "text": "Explore"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image314": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Image319": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/celebrations.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image315": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.facebook.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image316": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.linkedin.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image317": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.twitter.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image318": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox780": {
      "custom": {
        "text": "Videos"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/videos"
            }
          }
        ]
      }
    },
    "TextBox781": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/blog"
            }
          }
        ]
      }
    },
    "TextBox782": {
      "custom": {
        "text": "Places"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/places"
            }
          }
        ]
      }
    },
    "TextBox783": {
      "custom": {
        "text": "TravelTellers"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/traveltellers"
            }
          }
        ]
      }
    },
    "TextBox784": {
      "custom": {
        "text": "Terms & Conditions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/terms"
            }
          }
        ]
      }
    },
    "TextBox785": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox786": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox787": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/privacy-policy"
            }
          }
        ]
      }
    }
  },
  "videos": {
    "Videos_Body": {
      "callbacks": {}
    },
    "Flex442": {
      "callbacks": {}
    },
    "Flex439": {
      "callbacks": {}
    },
    "Flex437": {
      "callbacks": {}
    },
    "Flex438": {
      "callbacks": {}
    },
    "Flex440": {
      "callbacks": {}
    },
    "Flex441": {
      "callbacks": {}
    },
    "Flex299": {
      "callbacks": {}
    },
    "Flex298": {
      "callbacks": {}
    },
    "Div200": {
      "callbacks": {}
    },
    "Div201": {
      "callbacks": {}
    },
    "Div202": {
      "callbacks": {}
    },
    "Div203": {
      "callbacks": {}
    },
    "Flex430": {
      "callbacks": {}
    },
    "Image313": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/celebrations.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image309": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.facebook.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image310": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.linkedin.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image311": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.twitter.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image312": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox768": {
      "custom": {
        "text": "Videos"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/videos"
            }
          }
        ]
      }
    },
    "TextBox769": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/blog"
            }
          }
        ]
      }
    },
    "TextBox770": {
      "custom": {
        "text": "Places"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/places"
            }
          }
        ]
      }
    },
    "TextBox771": {
      "custom": {
        "text": "TravelTellers"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/traveltellers"
            }
          }
        ]
      }
    },
    "TextBox772": {
      "custom": {
        "text": "Terms & Conditions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/terms"
            }
          }
        ]
      }
    },
    "TextBox773": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox774": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox775": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/privacy-policy"
            }
          }
        ]
      }
    },
    "TextBox506": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox507": {
      "custom": {
        "text": "TravelTell Videos"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox502": {
      "custom": {
        "text": "Sydney, Australia"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image198": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/place2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox503": {
      "custom": {
        "text": "Kashmir, India"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image199": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/place3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox504": {
      "custom": {
        "text": "Ko Samui, Thailand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image200": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/place4.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox505": {
      "custom": {
        "text": "Siwa Oasis, Egypt"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image201": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/place1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button42": {
      "custom": {
        "text": "Become a TravelTeller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox756": {
      "custom": {
        "text": "Sign In"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox757": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox758": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox759": {
      "custom": {
        "text": "Explore"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image303": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    }
  },
  "traveltellers": {
    "Travel_Teller_Body": {
      "callbacks": {}
    },
    "Flex263": {
      "callbacks": {}
    },
    "Flex262": {
      "callbacks": {}
    },
    "Flex259": {
      "callbacks": {}
    },
    "Flex260": {
      "callbacks": {}
    },
    "Flex261": {
      "callbacks": {}
    },
    "Div162": {
      "callbacks": {}
    },
    "Flex451": {
      "callbacks": {}
    },
    "Flex457": {
      "callbacks": {}
    },
    "Flex454": {
      "callbacks": {}
    },
    "Flex452": {
      "callbacks": {}
    },
    "Flex453": {
      "callbacks": {}
    },
    "Flex455": {
      "callbacks": {}
    },
    "Flex456": {
      "callbacks": {}
    },
    "Image151": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox421": {
      "custom": {
        "text": "Natasha Miles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox422": {
      "custom": {
        "text": "Paris, France"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image152": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox423": {
      "custom": {
        "text": "Mason Miller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox424": {
      "custom": {
        "text": "Amsterdam, Netherlands"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox425": {
      "custom": {
        "text": "New York, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox426": {
      "custom": {
        "text": "Rachelle Mindy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image153": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input38": {
      "custom": {
        "value": "",
        "placeholder": "Find a TravelTeller"
      },
      "callbacks": {}
    },
    "TextBox427": {
      "custom": {
        "text": "All TravelTellers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox428": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button45": {
      "custom": {
        "text": "Become a TravelTeller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox792": {
      "custom": {
        "text": "Sign In"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox793": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox794": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox795": {
      "custom": {
        "text": "Explore"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image321": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Image326": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/celebrations.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image322": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.facebook.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image323": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.linkedin.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image324": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.twitter.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image325": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox796": {
      "custom": {
        "text": "Videos"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/videos"
            }
          }
        ]
      }
    },
    "TextBox797": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/blog"
            }
          }
        ]
      }
    },
    "TextBox798": {
      "custom": {
        "text": "Places"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/places"
            }
          }
        ]
      }
    },
    "TextBox799": {
      "custom": {
        "text": "TravelTellers"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/traveltellers"
            }
          }
        ]
      }
    },
    "TextBox800": {
      "custom": {
        "text": "Terms & Conditions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/terms"
            }
          }
        ]
      }
    },
    "TextBox801": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox802": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox803": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/privacy-policy"
            }
          }
        ]
      }
    }
  },
  "contact": {
    "Flex377": {
      "callbacks": {}
    },
    "Flex378": {
      "callbacks": {}
    },
    "Flex409": {
      "callbacks": {}
    },
    "Flex407": {
      "callbacks": {}
    },
    "Flex403": {
      "callbacks": {}
    },
    "Flex404": {
      "callbacks": {}
    },
    "Flex405": {
      "callbacks": {}
    },
    "Flex406": {
      "callbacks": {}
    },
    "Flex408": {
      "callbacks": {}
    },
    "Flex421": {
      "callbacks": {}
    },
    "Flex418": {
      "callbacks": {}
    },
    "Flex416": {
      "callbacks": {}
    },
    "Flex417": {
      "callbacks": {}
    },
    "Flex419": {
      "callbacks": {}
    },
    "Flex420": {
      "callbacks": {}
    },
    "Button38": {
      "custom": {
        "text": "Become a TravelTeller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox689": {
      "custom": {
        "text": "Sign In"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox690": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox691": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox692": {
      "custom": {
        "text": "Explore"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image273": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Button40": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input46": {
      "custom": {
        "value": "",
        "placeholder": "Your message..."
      },
      "callbacks": {}
    },
    "Input47": {
      "custom": {
        "value": "",
        "placeholder": "Phone Number"
      },
      "callbacks": {}
    },
    "Input48": {
      "custom": {
        "value": "",
        "placeholder": "Email Address*"
      },
      "callbacks": {}
    },
    "Input49": {
      "custom": {
        "value": "",
        "placeholder": "Last Name*"
      },
      "callbacks": {}
    },
    "Input50": {
      "custom": {
        "value": "",
        "placeholder": "First Name*"
      },
      "callbacks": {}
    },
    "TextBox720": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox721": {
      "custom": {
        "text": "Send us a message."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox722": {
      "custom": {
        "text": "HAVE QUESTIONS?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image296": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/celebrations.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image292": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.facebook.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image293": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.linkedin.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image294": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.twitter.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image295": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox731": {
      "custom": {
        "text": "Videos"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/videos"
            }
          }
        ]
      }
    },
    "TextBox732": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/blog"
            }
          }
        ]
      }
    },
    "TextBox733": {
      "custom": {
        "text": "Places"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/places"
            }
          }
        ]
      }
    },
    "TextBox734": {
      "custom": {
        "text": "TravelTellers"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/traveltellers"
            }
          }
        ]
      }
    },
    "TextBox735": {
      "custom": {
        "text": "Terms & Conditions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/terms"
            }
          }
        ]
      }
    },
    "TextBox736": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox737": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox738": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/privacy-policy"
            }
          }
        ]
      }
    }
  },
  "privacy-policy": {
    "Privacy_Policy": {
      "callbacks": {}
    },
    "Flex364": {
      "callbacks": {}
    },
    "Div227": {
      "callbacks": {}
    },
    "Flex370": {
      "callbacks": {}
    },
    "Flex367": {
      "callbacks": {}
    },
    "Flex368": {
      "callbacks": {}
    },
    "Flex369": {
      "callbacks": {}
    },
    "Flex365": {
      "callbacks": {}
    },
    "Flex366": {
      "callbacks": {}
    },
    "Button37": {
      "custom": {
        "text": "Become a TravelTeller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox657": {
      "custom": {
        "text": "Sign In"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox658": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox659": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox660": {
      "custom": {
        "text": "Explore"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image262": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox661": {
      "custom": {
        "text": "Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox662": {
      "custom": {
        "text": "How to customize formatting for each rich text"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox663": {
      "custom": {
        "text": "Static and dynamic content editing"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox664": {
      "custom": {
        "text": "Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox665": {
      "custom": {
        "text": "Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox666": {
      "custom": {
        "text": "How to customize formatting for each rich text"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox667": {
      "custom": {
        "text": "Static and dynamic content editing"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox668": {
      "custom": {
        "text": "A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox669": {
      "custom": {
        "text": "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox670": {
      "custom": {
        "text": "What’s a Rich Text element?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox671": {
      "custom": {
        "text": "Last Updated: September, 27 2019"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox672": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image267": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/celebrations.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox673": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/privacy-policy"
            }
          }
        ]
      }
    },
    "TextBox674": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox675": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox676": {
      "custom": {
        "text": "Terms & Conditions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/terms"
            }
          }
        ]
      }
    },
    "TextBox677": {
      "custom": {
        "text": "TravelTellers"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/traveltellers"
            }
          }
        ]
      }
    },
    "TextBox678": {
      "custom": {
        "text": "Places"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/places"
            }
          }
        ]
      }
    },
    "TextBox679": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/blog"
            }
          }
        ]
      }
    },
    "TextBox680": {
      "custom": {
        "text": "Videos"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/videos"
            }
          }
        ]
      }
    },
    "Image263": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Image264": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.twitter.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image265": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.linkedin.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image266": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.facebook.com",
              "target": "_blank"
            }
          }
        ]
      }
    }
  },
  "terms": {
    "Flex355": {
      "callbacks": {}
    },
    "Flex356": {
      "callbacks": {}
    },
    "Div226": {
      "callbacks": {}
    },
    "Flex376": {
      "callbacks": {}
    },
    "Flex373": {
      "callbacks": {}
    },
    "Flex371": {
      "callbacks": {}
    },
    "Flex372": {
      "callbacks": {}
    },
    "Flex374": {
      "callbacks": {}
    },
    "Flex375": {
      "callbacks": {}
    },
    "Button36": {
      "custom": {
        "text": "Become a TravelTeller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox633": {
      "custom": {
        "text": "Sign In"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox634": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox635": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox636": {
      "custom": {
        "text": "Explore"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image256": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox637": {
      "custom": {
        "text": "Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox638": {
      "custom": {
        "text": "How to customize formatting for each rich text"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox639": {
      "custom": {
        "text": "Static and dynamic content editing"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox640": {
      "custom": {
        "text": "Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox641": {
      "custom": {
        "text": "Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox642": {
      "custom": {
        "text": "How to customize formatting for each rich text"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox643": {
      "custom": {
        "text": "Static and dynamic content editing"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox644": {
      "custom": {
        "text": "A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox645": {
      "custom": {
        "text": "The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox646": {
      "custom": {
        "text": "What’s a Rich Text element?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox647": {
      "custom": {
        "text": "Last Updated: September, 27 2019"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox648": {
      "custom": {
        "text": "Terms & Conditions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image272": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/celebrations.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image268": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.facebook.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image269": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.linkedin.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image270": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.twitter.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image271": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox681": {
      "custom": {
        "text": "Videos"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/videos"
            }
          }
        ]
      }
    },
    "TextBox682": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/blog"
            }
          }
        ]
      }
    },
    "TextBox683": {
      "custom": {
        "text": "Places"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/places"
            }
          }
        ]
      }
    },
    "TextBox684": {
      "custom": {
        "text": "TravelTellers"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/traveltellers"
            }
          }
        ]
      }
    },
    "TextBox685": {
      "custom": {
        "text": "Terms & Conditions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/terms"
            }
          }
        ]
      }
    },
    "TextBox686": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox687": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox688": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/privacy-policy"
            }
          }
        ]
      }
    }
  },
  "shop": {
    "Shop": {
      "callbacks": {}
    },
    "Flex317": {
      "callbacks": {}
    },
    "Flex315": {
      "callbacks": {}
    },
    "Flex314": {
      "callbacks": {}
    },
    "Div211": {
      "callbacks": {}
    },
    "Div212": {
      "callbacks": {}
    },
    "Div213": {
      "callbacks": {}
    },
    "Div214": {
      "callbacks": {}
    },
    "Div215": {
      "callbacks": {}
    },
    "Flex316": {
      "callbacks": {}
    },
    "Flex429": {
      "callbacks": {}
    },
    "Flex422": {
      "callbacks": {}
    },
    "Flex428": {
      "callbacks": {}
    },
    "Flex425": {
      "callbacks": {}
    },
    "Flex423": {
      "callbacks": {}
    },
    "Flex424": {
      "callbacks": {}
    },
    "Flex426": {
      "callbacks": {}
    },
    "Flex427": {
      "callbacks": {}
    },
    "TextBox558": {
      "custom": {
        "text": "TravelTell Products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox548": {
      "custom": {
        "text": "$ 82.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox549": {
      "custom": {
        "text": "Carry On Suitcase"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image213": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product5.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox550": {
      "custom": {
        "text": "$ 220.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox551": {
      "custom": {
        "text": "Full Travel Pack"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image214": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product4.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox552": {
      "custom": {
        "text": "$ 168.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox553": {
      "custom": {
        "text": "Cannon Camera"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image215": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox554": {
      "custom": {
        "text": "$ 22.00 US"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox555": {
      "custom": {
        "text": "Travel Journal"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image216": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox556": {
      "custom": {
        "text": "$ 59.00 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox557": {
      "custom": {
        "text": "Travel Backpack"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image217": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox562": {
      "custom": {
        "text": "Shop By Category"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox752": {
      "custom": {
        "text": "Essentials"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox754": {
      "custom": {
        "text": "Packages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox755": {
      "custom": {
        "text": "Extras"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button41": {
      "custom": {
        "text": "Become a TravelTeller"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox739": {
      "custom": {
        "text": "Sign In"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox740": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox741": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox742": {
      "custom": {
        "text": "Explore"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image297": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Image302": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/celebrations.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image298": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.facebook.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image299": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.linkedin.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image300": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "www.twitter.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image301": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox743": {
      "custom": {
        "text": "Videos"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/videos"
            }
          }
        ]
      }
    },
    "TextBox744": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/blog"
            }
          }
        ]
      }
    },
    "TextBox745": {
      "custom": {
        "text": "Places"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/places"
            }
          }
        ]
      }
    },
    "TextBox746": {
      "custom": {
        "text": "TravelTellers"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/traveltellers"
            }
          }
        ]
      }
    },
    "TextBox747": {
      "custom": {
        "text": "Terms & Conditions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/terms"
            }
          }
        ]
      }
    },
    "TextBox748": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop"
            }
          }
        ]
      }
    },
    "TextBox749": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/contact"
            }
          }
        ]
      }
    },
    "TextBox750": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/privacy-policy"
            }
          }
        ]
      }
    }
  },
  "temp": {
    "Flex723": {
      "callbacks": {}
    },
    "Div261": {
      "callbacks": {}
    },
    "Flex724": {
      "callbacks": {}
    },
    "Flex725": {
      "callbacks": {}
    },
    "Div262": {
      "callbacks": {}
    },
    "Div263": {
      "callbacks": {}
    },
    "Div264": {
      "callbacks": {}
    },
    "Div265": {
      "callbacks": {}
    },
    "Div266": {
      "callbacks": {}
    },
    "Image508": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/home_page.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1080": {
      "custom": {
        "text": "A community of travellers and story tellers"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input87": {
      "custom": {
        "value": "",
        "placeholder": "Search"
      },
      "callbacks": {}
    },
    "TextBox1081": {
      "custom": {
        "text": "Featured Posts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1082": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image514": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1084": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image518": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image511": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1083": {
      "custom": {
        "text": "Africa's People and Culture"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image515": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image512": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image516": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1086": {
      "custom": {
        "text": "India's People, Places and Events"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image519": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1087": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image520": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1088": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image521": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/story3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1089": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image522": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1090": {
      "custom": {
        "text": "Japan Like you've never seen before"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;

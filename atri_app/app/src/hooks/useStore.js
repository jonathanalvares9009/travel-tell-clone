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
    "Flex99": {
      "callbacks": {}
    },
    "Flex105": {
      "callbacks": {}
    },
    "Div121": {
      "callbacks": {}
    },
    "Flex104": {
      "callbacks": {}
    },
    "Flex101": {
      "callbacks": {}
    },
    "Flex102": {
      "callbacks": {}
    },
    "Flex103": {
      "callbacks": {}
    },
    "Flex100": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Flex127": {
      "callbacks": {}
    },
    "Flex128": {
      "callbacks": {}
    },
    "Div127": {
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
    "Image93": {
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
    "TextBox129": {
      "custom": {
        "text": "Terms and Conditions"
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
    "TextBox130": {
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
    "TextBox131": {
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
    "TextBox132": {
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
    "TextBox133": {
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
    "TextBox134": {
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
    "TextBox135": {
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
    "TextBox136": {
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
    "Image92": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image89": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image90": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image91": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
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
    "TextBox165": {
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
    "TextBox166": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox167": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox168": {
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
    "Image110": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "blog": {
    "Flex80": {
      "callbacks": {}
    },
    "Div115": {
      "callbacks": {}
    },
    "Flex79": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
    "Div128": {
      "callbacks": {}
    },
    "Image73": {
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
    "TextBox97": {
      "custom": {
        "text": "Terms and Conditions"
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
    "TextBox98": {
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
    "TextBox99": {
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
    "TextBox100": {
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
    "TextBox101": {
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
    "TextBox102": {
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
    "TextBox103": {
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
    "TextBox104": {
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
    "Image72": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image69": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image70": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image71": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button4": {
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
    "TextBox169": {
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
    "TextBox170": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
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
    "Image111": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "places": {
    "Places_Body": {
      "callbacks": {}
    },
    "Flex275": {
      "callbacks": {}
    },
    "Flex273": {
      "callbacks": {}
    },
    "Flex274": {
      "callbacks": {}
    },
    "Div173": {
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
    "Flex283": {
      "callbacks": {}
    },
    "Div178": {
      "callbacks": {}
    },
    "Flex282": {
      "callbacks": {}
    },
    "Flex279": {
      "callbacks": {}
    },
    "Flex280": {
      "callbacks": {}
    },
    "Flex281": {
      "callbacks": {}
    },
    "Flex278": {
      "callbacks": {}
    },
    "Button24": {
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
    "TextBox450": {
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
    "TextBox451": {
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
    "TextBox452": {
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
    "TextBox453": {
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
    "Image167": {
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
    "Image176": {
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
    "TextBox460": {
      "custom": {
        "text": "Terms and Conditions"
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
    "TextBox461": {
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
    "TextBox462": {
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
    "TextBox463": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop "
            }
          }
        ]
      }
    },
    "TextBox464": {
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
    "TextBox465": {
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
    "TextBox466": {
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
    "TextBox467": {
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
    "Image175": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image172": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image173": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image174": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "videos": {
    "Videos_Body": {
      "callbacks": {}
    },
    "Flex287": {
      "callbacks": {}
    },
    "Flex285": {
      "callbacks": {}
    },
    "Flex286": {
      "callbacks": {}
    },
    "Div179": {
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
    "Flex305": {
      "callbacks": {}
    },
    "Div204": {
      "callbacks": {}
    },
    "Flex304": {
      "callbacks": {}
    },
    "Flex301": {
      "callbacks": {}
    },
    "Flex302": {
      "callbacks": {}
    },
    "Flex303": {
      "callbacks": {}
    },
    "Flex300": {
      "callbacks": {}
    },
    "Button25": {
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
    "TextBox468": {
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
    "TextBox469": {
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
    "TextBox470": {
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
    "TextBox471": {
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
    "Image177": {
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
    "Image206": {
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
    "TextBox508": {
      "custom": {
        "text": "Terms and Conditions"
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
    "TextBox509": {
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
    "TextBox510": {
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
    "TextBox511": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop "
            }
          }
        ]
      }
    },
    "TextBox512": {
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
    "TextBox513": {
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
    "TextBox514": {
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
    "TextBox515": {
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
    "Image205": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image202": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image203": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image204": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "traveltellers": {
    "Travel_Teller_Body": {
      "callbacks": {}
    },
    "Flex258": {
      "callbacks": {}
    },
    "Flex256": {
      "callbacks": {}
    },
    "Flex257": {
      "callbacks": {}
    },
    "Div161": {
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
    "Flex269": {
      "callbacks": {}
    },
    "Div163": {
      "callbacks": {}
    },
    "Flex268": {
      "callbacks": {}
    },
    "Flex265": {
      "callbacks": {}
    },
    "Flex266": {
      "callbacks": {}
    },
    "Flex267": {
      "callbacks": {}
    },
    "Flex264": {
      "callbacks": {}
    },
    "Button23": {
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
    "TextBox417": {
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
    "TextBox418": {
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
    "TextBox419": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox420": {
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
    "Image150": {
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
    "Image158": {
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
    "TextBox429": {
      "custom": {
        "text": "Terms and Conditions"
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
    "TextBox430": {
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
    "TextBox431": {
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
    "TextBox432": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop "
            }
          }
        ]
      }
    },
    "TextBox433": {
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
    "TextBox434": {
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
    "TextBox435": {
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
    "TextBox436": {
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
    "Image157": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image154": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image155": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image156": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "contact": {
    "Flex228": {
      "callbacks": {}
    },
    "Flex226": {
      "callbacks": {}
    },
    "Flex227": {
      "callbacks": {}
    },
    "Div154": {
      "callbacks": {}
    },
    "Flex235": {
      "callbacks": {}
    },
    "Flex233": {
      "callbacks": {}
    },
    "Flex229": {
      "callbacks": {}
    },
    "Flex230": {
      "callbacks": {}
    },
    "Flex231": {
      "callbacks": {}
    },
    "Flex232": {
      "callbacks": {}
    },
    "Flex234": {
      "callbacks": {}
    },
    "Flex241": {
      "callbacks": {}
    },
    "Div155": {
      "callbacks": {}
    },
    "Flex240": {
      "callbacks": {}
    },
    "Flex237": {
      "callbacks": {}
    },
    "Flex238": {
      "callbacks": {}
    },
    "Flex239": {
      "callbacks": {}
    },
    "Flex236": {
      "callbacks": {}
    },
    "Button20": {
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
    "TextBox386": {
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
    "TextBox387": {
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
    "TextBox388": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox389": {
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
    "Image137": {
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
    "Button21": {
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
    "Input32": {
      "custom": {
        "value": "",
        "placeholder": "Your message..."
      },
      "callbacks": {}
    },
    "Input33": {
      "custom": {
        "value": "",
        "placeholder": "Phone Number"
      },
      "callbacks": {}
    },
    "Input34": {
      "custom": {
        "value": "",
        "placeholder": "Email Address*"
      },
      "callbacks": {}
    },
    "Input35": {
      "custom": {
        "value": "",
        "placeholder": "Last Name*"
      },
      "callbacks": {}
    },
    "Input36": {
      "custom": {
        "value": "",
        "placeholder": "First Name*"
      },
      "callbacks": {}
    },
    "TextBox390": {
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
    "TextBox391": {
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
    "TextBox392": {
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
    "Image142": {
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
    "TextBox393": {
      "custom": {
        "text": "Terms and Conditions"
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
    "TextBox394": {
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
    "TextBox395": {
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
    "TextBox396": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop "
            }
          }
        ]
      }
    },
    "TextBox397": {
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
    "TextBox398": {
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
    "TextBox399": {
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
    "TextBox400": {
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
    "Image141": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image138": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image139": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image140": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "privacy-policy": {
    "Privacy_Body": {
      "callbacks": {}
    },
    "Flex167": {
      "callbacks": {}
    },
    "Flex165": {
      "callbacks": {}
    },
    "Flex166": {
      "callbacks": {}
    },
    "Div145": {
      "callbacks": {}
    },
    "Div149": {
      "callbacks": {}
    },
    "Flex173": {
      "callbacks": {}
    },
    "Div150": {
      "callbacks": {}
    },
    "Flex172": {
      "callbacks": {}
    },
    "Flex169": {
      "callbacks": {}
    },
    "Flex170": {
      "callbacks": {}
    },
    "Flex171": {
      "callbacks": {}
    },
    "Flex168": {
      "callbacks": {}
    },
    "Button13": {
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
    "TextBox299": {
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
    "TextBox300": {
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
    "TextBox301": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox302": {
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
    "Image125": {
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
    "TextBox339": {
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
    "TextBox340": {
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
    "TextBox341": {
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
    "TextBox342": {
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
    "TextBox343": {
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
    "TextBox344": {
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
    "TextBox345": {
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
    "TextBox346": {
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
    "TextBox347": {
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
    "TextBox348": {
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
    "TextBox349": {
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
    "TextBox350": {
      "custom": {
        "text": "Private Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image130": {
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
    "TextBox351": {
      "custom": {
        "text": "Terms and Conditions"
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
    "TextBox352": {
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
    "TextBox353": {
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
    "TextBox354": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop "
            }
          }
        ]
      }
    },
    "TextBox355": {
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
    "TextBox356": {
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
    "TextBox357": {
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
    "TextBox358": {
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
    "Image129": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image126": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image127": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image128": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "terms": {
    "Body_TnC": {
      "callbacks": {}
    },
    "Flex157": {
      "callbacks": {}
    },
    "Flex155": {
      "callbacks": {}
    },
    "Flex156": {
      "callbacks": {}
    },
    "Div138": {
      "callbacks": {}
    },
    "Div143": {
      "callbacks": {}
    },
    "Flex163": {
      "callbacks": {}
    },
    "Div144": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {}
    },
    "Flex159": {
      "callbacks": {}
    },
    "Flex160": {
      "callbacks": {}
    },
    "Flex161": {
      "callbacks": {}
    },
    "Flex158": {
      "callbacks": {}
    },
    "Button12": {
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
    "TextBox227": {
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
    "TextBox228": {
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
    "TextBox229": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox230": {
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
    "Image119": {
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
    "TextBox279": {
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
    "TextBox280": {
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
    "TextBox281": {
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
    "TextBox282": {
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
    "TextBox283": {
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
    "TextBox284": {
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
    "TextBox285": {
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
    "TextBox286": {
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
    "TextBox287": {
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
    "TextBox288": {
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
    "TextBox289": {
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
    "TextBox290": {
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
    "Image124": {
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
    "TextBox291": {
      "custom": {
        "text": "Terms and Conditions"
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
    "TextBox292": {
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
    "TextBox293": {
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
    "TextBox294": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/shop "
            }
          }
        ]
      }
    },
    "TextBox295": {
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
    "TextBox296": {
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
    "TextBox297": {
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
    "TextBox298": {
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
    "Image123": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image120": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image121": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image122": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "shop": {
    "Shop": {
      "callbacks": {}
    },
    "Flex313": {
      "callbacks": {}
    },
    "Flex311": {
      "callbacks": {}
    },
    "Flex312": {
      "callbacks": {}
    },
    "Div210": {
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
    "Flex323": {
      "callbacks": {}
    },
    "Div216": {
      "callbacks": {}
    },
    "Flex322": {
      "callbacks": {}
    },
    "Flex319": {
      "callbacks": {}
    },
    "Flex320": {
      "callbacks": {}
    },
    "Flex321": {
      "callbacks": {}
    },
    "Flex318": {
      "callbacks": {}
    },
    "Button26": {
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
    "TextBox544": {
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
    "TextBox545": {
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
    "TextBox546": {
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
    "TextBox547": {
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
    "Image212": {
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
    "TextBox559": {
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
    "TextBox560": {
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
    "TextBox561": {
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
    "Image222": {
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
    "TextBox563": {
      "custom": {
        "text": "Terms and Conditions"
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
    "TextBox564": {
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
    "TextBox565": {
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
    "TextBox566": {
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
    "TextBox567": {
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
    "TextBox568": {
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
    "TextBox569": {
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
    "TextBox570": {
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
    "Image221": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ed472c3a90a9c93ed22d1e1_TravelTell_Dark_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image218": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image219": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image220": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/facebook.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "temp": {}
}};

useStore.setState(desktopModeProps);

export default useStore;

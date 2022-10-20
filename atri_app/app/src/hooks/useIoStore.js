import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "blog": {},
  "places": {},
  "videos": {},
  "traveltellers": {},
  "contact": {},
  "privacy-policy": {},
  "terms": {},
  "shop": {},
  "temp": {}
}});

export default useIoStore;

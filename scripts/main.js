//console.log("you are doing fine!");
import { useFish } from './fish/FishDataProvider.js';
import { FishList } from './fish/FishList.js';
import { useTip } from './tips/TipDataProvider.js';
import { TipList } from './tips/TipList.js';
import { useLocation } from './locations/LocationDataProvider.js';
import { LocationList } from './locations/LocationList.js';
//const allTheFish = useFish()

//for (const fish of allTheFish) {
 //   console.log("the item is",fish)
//}

FishList ();
TipList ();
LocationList ();
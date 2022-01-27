import { Item, GildedRose } from '../app/gilded-rose';

// Add a master test here

const items: Array<Item> = [
    new Item('item1', 5, 8),
    new Item('item2', 4, 15),
    new Item('item3', 2, 6),
    new Item('Aged Brie', 10, 3),
    new Item('Aged Brie', 1, 33),
    new Item('Sulfuras, Hand of Ragnaros', 20, 20),
    new Item('Sulfuras, Hand of Ragnaros', 80, 20),
    new Item('Backstage passes to a TAFKAL80ETC concert', 11, 8),
    new Item('Backstage passes to a TAFKAL80ETC concert', 8, 8),
    new Item('Backstage passes to a TAFKAL80ETC concert', 2, 8),
]

const gildedRose = new GildedRose(items);
gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();

console.log(gildedRose.items);

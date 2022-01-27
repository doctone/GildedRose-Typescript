import 'chai/register-should';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should correspond with golden record output', function () {
        const expectedItems: Array<Item> = [
            new Item('item1', 2, 5),
            new Item('item2', 1, 12),
            new Item('item3', -1, 2),
            new Item('Aged Brie', 7, 6),
            new Item('Aged Brie', -2, 50),
            new Item('Sulfuras, Hand of Ragnaros', 20, 20),
            new Item('Sulfuras, Hand of Ragnaros', 80, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 8, 13),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 14),
            new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)

        ];
        const testItems: Array<Item> = [
            new Item('item1', 5, 8),
            new Item('item2', 4, 15),
            new Item('item3', 2, 6),
            new Item('Aged Brie', 10, 3),
            new Item('Aged Brie', 1, 48),
            new Item('Sulfuras, Hand of Ragnaros', 20, 20),
            new Item('Sulfuras, Hand of Ragnaros', 80, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 11, 8),
            new Item('Backstage passes to a TAFKAL80ETC concert', 8, 8),
            new Item('Backstage passes to a TAFKAL80ETC concert', 2, 8),
        ]

        const gildedRose = new GildedRose(testItems)
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();

        gildedRose.items.should.deep.equal(expectedItems);
    });

});

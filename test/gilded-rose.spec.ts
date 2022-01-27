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

    it('decreases the quality and sellIn value of a normal item', () => {
        const item1: Item = new Item('item1', 10, 12);
        const gildedRose = new GildedRose([item1]);
        const expectedItem = [new Item('item1', 9, 11)];
        gildedRose.updateQuality();
        gildedRose.items.should.deep.equal(expectedItem);
    })
    it('never reduces quality below 0', () => {
        const item1: Item = new Item('item1', 4, 2);
        const gildedRose = new GildedRose([item1]);
        const expectedItem = [new Item('item1', 0, 0)];
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.items.should.deep.equal(expectedItem);
    })
    it('never increases quality higher than 50', () => {
        const item1: Item = new Item('Aged Brie', 4, 49);
        const gildedRose = new GildedRose([item1]);
        const expectedItem = [new Item('Aged Brie', 1, 50)];
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
   
        gildedRose.items.should.deep.equal(expectedItem);
    })
    it('reduces quality by 2 when sellIn value is negative', () => {
        const item1: Item = new Item('item1', -4, 10);
        const gildedRose = new GildedRose([item1]);
        const expectedItem = [new Item('item1', -7, 4)];
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.items.should.deep.equal(expectedItem);
        
    })
    
    describe('Aged Brie', () => {
        it('increases quality 1 each day if sellIn value over 10', () => {
            const item1: Item = new Item('Aged Brie', 15, 10);
            const gildedRose = new GildedRose([item1]);
            const expectedItem = [new Item('Aged Brie', 12, 13)];
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.items.should.deep.equal(expectedItem);
        })

        
        // it('increases quality by ')
    })
    describe('Backstage passes', () => {
        it('increases quality by 2 if sellIn value less than 10', () => {
            const backstagePass: Item = new Item('Backstage passes to a TAFKAL80ETC concert', 8, 10);
            const gildedRose = new GildedRose([backstagePass]);
            const expectedItem = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 16)];
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.items.should.deep.equal(expectedItem);
        });
    });
    
    describe('Sulfuras', () => {

        it('never decreases in quality from 80', () => {
            const sulfuras: Item = new Item('Sulfuras, Hand of Ragnaros', 23, 80);
            const gildedRose = new GildedRose([sulfuras]);
            const expectedItem = [new Item('Sulfuras, Hand of Ragnaros', 23, 80)];
            
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
    
            gildedRose.items.should.deep.equal(expectedItem);
        });
    });
    
    describe('Conjured Mana Cake', () => {

        it('lowers in quality twice as fast', () => {
            const manaCake: Item = new Item('Conjured Mana Cake', 13, 10);
            const gildedRose = new GildedRose([manaCake]);
            const expectedItem = [new Item('Conjured Mana Cake', 10, 4)];
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
    
            gildedRose.items.should.deep.equal(expectedItem);
        });
        it('lowers by 4 when sellIn value less than 0', () => {
            const manaCake: Item = new Item('Conjured Mana Cake', 1, 10);
            const gildedRose = new GildedRose([manaCake]);
            const expectedItem = [new Item('Conjured Mana Cake', -2, 0)];
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
    
            gildedRose.items.should.deep.equal(expectedItem);
        });
    });

});

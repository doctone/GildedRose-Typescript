export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    isNormal(item) {
        return item !== 'Aged Brie'
            && item !== 'Sulfuras, Hand of Ragnaros'
            && item !== 'Backstage passes to a TAFKAL80ETC concert'
            && item !== 'Conjured Mana Cake';
    }
    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn -= 1;
            } else continue;
            if (this.isNormal(this.items[i].name)) {
                this.items[i].quality -= this.items[i].sellIn < 0 ? 2 : 1;
                continue;
            }

            if (this.items[i].name === 'Aged Brie') {
                this.items[i].quality += 1;
                continue;
            }

            if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                this.items[i].quality += 1;
                if (this.items[i].sellIn < 10) {
                    this.items[i].quality = this.items[i].quality + 1
                }
                if (this.items[i].sellIn < 5) {
                    this.items[i].quality = this.items[i].quality + 1
                }
                if (this.items[i].sellIn < 0) {
                    this.items[i].quality = 0;
                }
            }
            if (this.items[i].name === 'Conjured Mana Cake'){
                this.items[i].quality -= 2;
            }
        }
        for (const item of this.items) {
            if (item.quality < 0) {
                item.quality = 0;
            }
            if (item.quality > 50 && item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality = 50
            }
            if (item.quality > 80) {
                item.quality = 80;
            }
        }
        return this.items;
    }
}

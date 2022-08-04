import {
  ItemDeListed as ItemDeListedEvent,
  ItemListedForRent as ItemListedForRentEvent,
  ItemRented as ItemRentedEvent,
  ItemReturned as ItemReturnedEvent
} from "../generated/lyncMarketplace/lyncMarketplace"
import {
  ItemDeListed,
  ItemListedForRent,
  ItemRented,
  ItemReturned
} from "../generated/schema"

export function handleItemDeListed(event: ItemDeListedEvent): void {
  let entity = new ItemDeListed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleItemListedForRent(event: ItemListedForRentEvent): void {
  let entity = new ItemListedForRent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.pricePerDay = event.params.pricePerDay
  entity.save()
}

export function handleItemRented(event: ItemRentedEvent): void {
  let entity = new ItemRented(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.renter = event.params.renter
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.duration = event.params.duration
  entity.save()
}

export function handleItemReturned(event: ItemReturnedEvent): void {
  let entity = new ItemReturned(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.renter = event.params.renter
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.duration = event.params.duration
  entity.save()
}

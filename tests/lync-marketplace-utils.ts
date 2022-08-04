import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ItemDeListed,
  ItemListedForRent,
  ItemRented,
  ItemReturned
} from "../generated/lyncMarketplace/lyncMarketplace"

export function createItemDeListedEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt
): ItemDeListed {
  let itemDeListedEvent = changetype<ItemDeListed>(newMockEvent())

  itemDeListedEvent.parameters = new Array()

  itemDeListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemDeListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemDeListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return itemDeListedEvent
}

export function createItemListedForRentEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt,
  pricePerDay: BigInt
): ItemListedForRent {
  let itemListedForRentEvent = changetype<ItemListedForRent>(newMockEvent())

  itemListedForRentEvent.parameters = new Array()

  itemListedForRentEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemListedForRentEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemListedForRentEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemListedForRentEvent.parameters.push(
    new ethereum.EventParam(
      "pricePerDay",
      ethereum.Value.fromUnsignedBigInt(pricePerDay)
    )
  )

  return itemListedForRentEvent
}

export function createItemRentedEvent(
  renter: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt,
  duration: BigInt
): ItemRented {
  let itemRentedEvent = changetype<ItemRented>(newMockEvent())

  itemRentedEvent.parameters = new Array()

  itemRentedEvent.parameters.push(
    new ethereum.EventParam("renter", ethereum.Value.fromAddress(renter))
  )
  itemRentedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemRentedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemRentedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  itemRentedEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )

  return itemRentedEvent
}

export function createItemReturnedEvent(
  renter: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt,
  duration: BigInt
): ItemReturned {
  let itemReturnedEvent = changetype<ItemReturned>(newMockEvent())

  itemReturnedEvent.parameters = new Array()

  itemReturnedEvent.parameters.push(
    new ethereum.EventParam("renter", ethereum.Value.fromAddress(renter))
  )
  itemReturnedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemReturnedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemReturnedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  itemReturnedEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )

  return itemReturnedEvent
}

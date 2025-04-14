import React from 'react'
import type { Route } from './+types/product'

export async function loader({ params }: Route.LoaderArgs){
    const { name } = params

    return {
        name: name.toUpperCase()
    }
}

const ProductPage = ({ loaderData }: Route.ComponentProps) => {
    const { name }= loaderData
    return (
        <div>ProductPage {name}</div>
    )
}

export default ProductPage
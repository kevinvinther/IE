import { render, screen } from "@testing-library/react"

import Home from "./Home"

test("renders the correct number of items", async () => {
    render(<Home />)
    const items = await screen.findAllByRole("img")
    expect(items.length).toBe(3)
})

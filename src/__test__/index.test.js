import { getStaticProps } from "../pages/index";

describe("getStaticProps function", () => {
  it("returns correct props", async () => {
    const props = await getStaticProps();

    expect(props).toEqual({
      props: {
        title: "Welcome to E-TECH",
        description:
          "Find in our Technology E-commerce great prices and several options to you!",
        newsletter:
          "Keep update in our last offers, do not miss chance to get our products.",
      },
    });
  });
});



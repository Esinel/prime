import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";

export default function CardExample({ h1 }: { h1?: boolean }) {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Tag severity="success">Status label</Tag>
        {h1 && <h1>H1 Title</h1>}
        <h2>H2 Title</h2>
        <h3>H3 title</h3>
        <p className="m-0">
          Paragraphy text. A short 2 line description goes here. A short 2 line
          description goes here.
        </p>
        <div style={{ display: "flex" }}>
          <Button link style={{ paddingLeft: 0 }}>
            Text link
          </Button>
          <Button link style={{ paddingLeft: 0 }}>
            Text link
          </Button>
        </div>
        <h3>H3 title</h3>

        <div>List item</div>
        <div>List item</div>
        <div>List item</div>
        <hr />
      </div>

      <Button style={{ width: "100%" }}>Secondary CTA</Button>
    </Card>
  );
}

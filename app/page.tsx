"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { TabView, TabPanel } from "primereact/tabview";
import TableExample from "./components/table/TableExample";
import CardExample from "./components/card/Card";
import ChartBasic from "./components/chart/Chart";
import Multiselect from "./components/multiselect/Multiselect";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import Radio from "./components/radio/Radio";
import CheckboxExample from "./components/checkbox/Checkbox";
import { InputSwitch } from "primereact/inputswitch";

export default function Home() {
  const [visibleLeftMenu, setVisibleLeftMenu] = useState(false);
  const [visibleRightMenu, setVisibleRightMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(null);

  return (
    <main className={styles.main}>
      {/* LEFT - left sidebar  */}
      <Button onClick={() => setVisibleLeftMenu(true)}>Open Menu</Button>

      <div className="card flex justify-content-center">
        <Sidebar
          title="Hello there jdhakwdjnwakjn"
          visible={visibleLeftMenu}
          onHide={() => setVisibleLeftMenu(false)}
        >
          <h2>LOGO</h2>
          <div className={styles.center}>
            <Avatar shape="circle" /> <span>User Name</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: "30px",
              height: "80%",
            }}
            className={styles.leftMenu}
          >
            <div>
              <Button link>Projects</Button>
              <br />
              <Button link>Interviews</Button>
              <br />
            </div>
            <div>
              <Button link>Help</Button>
              <br />
              <Button link>Feedback</Button>
              <br />
            </div>
          </div>
        </Sidebar>
      </div>

      {/* tabs */}

      <TabView>
        <TabPanel header="Hiring">
          <div className={styles.centerBetween}>
            <h1>H1 Projects</h1>
            <Button onClick={() => setVisibleRightMenu(true)}>
              + New project
            </Button>
          </div>
          <TableExample />

          <div
            className={styles.centerBetween}
            style={{ gap: "30px", marginTop: "69px" }}
          >
            <CardExample />
            <CardExample />
            <CardExample />
          </div>

          {/* bar graph */}
          <h1 style={{ marginTop: "69px" }}>H1 Analytics</h1>
          <div
            style={{
              display: "grid",
              gridTemplate: "1fr / 1fr 1fr",
            }}
          >
            <ChartBasic />
            <div>
              <h3>Graphical view</h3>
              <p>Some commentary on graph</p>
              <p>Paragraph text Paragraph text Paragraph text Paragraph text</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Reskilling"></TabPanel>
        <TabPanel header="Talent review"></TabPanel>
      </TabView>

      {/* regular input text */}

      {/* radio button group */}

      {/* checkbox group */}

      <Sidebar
        title="right"
        visible={visibleRightMenu}
        position="right"
        style={{ width: "600px" }}
        onHide={() => setVisibleRightMenu(false)}
      >
        <div className={styles.centerBetween}>
          <h1>H1 Header</h1>
          <div>
            <Button
              style={{
                background: "white",
                color: "#06B6D4",
                border: "1px solid #06B6D4",
              }}
            >
              Secondary
            </Button>
            <Button style={{ marginLeft: "15px" }}>Primary</Button>
          </div>
        </div>

        <br />
        <div>Helper text</div>
        <br />
        <Multiselect />
        <br />

        <Calendar
          value={date}
          onChange={(e) => setDate(e.value)}
          placeholder="Select date"
          style={{ width: "100%" }}
        />

        <br />
        <br />
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <InputSwitch
            checked={checked}
            onChange={(e) => setChecked(e.value)}
          />

          <span>Earth spinning</span>
        </div>

        <br />
        <InputText style={{ width: "100%" }} placeholder="Type text here" />

        <br />
        <br />
        <h4>Radio button group</h4>
        <Radio />

        <br />
        <h4>Checkbox group</h4>
        <CheckboxExample />
      </Sidebar>
    </main>
  );
}

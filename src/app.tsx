import AppLayout from "@cloudscape-design/components/app-layout";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import styles from "./app.module.scss";

export function App() {
  return (
    <AppLayout
      navigation={
        <SideNavigation
          header={{ text: "Service", href: "" }}
          items={[{ type: "link", text: "Home", href: "" }]}
          activeHref=""
        />
      }
      toolsHide={true}
      contentHeader={
        <Header
          variant="h1"
          description={
            <>
              Using <Box variant="code">@cloudscape-design/components</Box> library
            </>
          }
        >
          Demo app
        </Header>
      }
      content={
        <Container
          header={
            <Header
              actions={
                <Button data-testid="action-button" variant="primary" onClick={() => alert("Not implemented")}>
                  Action
                </Button>
              }
            >
              Main content
            </Header>
          }
        >
          <div className={styles.contentWrapper}>
            <div>Your application content goes here...</div>
          </div>
        </Container>
      }
    />
  );
}

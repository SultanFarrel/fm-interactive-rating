import { Description } from "./Description";
import { Title } from "./Title";
import { Text } from "./Text";
import { SelectedRate } from "./SelectedRate";
import { IconThanks } from "./icons/IconThanks";
import { AppLayout } from "./AppLayout";

export function Thankyou({ rate, maxRate, isSubmit }) {
  return (
    <AppLayout>
      <IconThanks />
      <SelectedRate rate={rate} maxRate={maxRate} />
      <Text isSubmit={isSubmit}>
        <Title isSubmit={isSubmit}>Thank you!</Title>
        <Description isSubmit={isSubmit}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </Description>
      </Text>
    </AppLayout>
  );
}

import { ButtonCTA } from "./buttons/ButtonCTA";
import { ButtonRate } from "./buttons/ButtonRate";
import { Description } from "./Description";
import { Title } from "./Title";
import { Text } from "./Text";
import { IconStar } from "./icons/IconStar";
import { AppLayout } from "./AppLayout";

export function RatingCard({ rate, setRate, maxRate, isSubmit, setIsSubmit }) {
  return (
    <AppLayout>
      <IconStar />
      <Text>
        <Title isSubmit={isSubmit}>How did we do?</Title>
        <Description isSubmit={isSubmit}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Description>
      </Text>
      <ButtonRate rate={rate} setRate={setRate} maxRate={maxRate} />
      <ButtonCTA rate={rate} setIsSubmit={setIsSubmit} />
    </AppLayout>
  );
}

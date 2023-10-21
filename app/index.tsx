import { useState } from "react";
import { Dimensions } from "react-native";
import {
  Button,
  Form,
  H2,
  Label,
  Stack,
  Text,
  ToggleGroup,
  XStack,
  YStack,
} from "tamagui";
import Input from "../components/Input";
import { formatMaskMoney } from "../utils/format";

enum InterestType {
  Simple = "simple",
  Compound = "compound",
}

enum InterestPeriod {
  Monthly = "monthly",
  Yearly = "yearly",
}

enum PeriodUnit {
  Months = "months",
  Years = "years",
}

const FORM_WIDTH = Dimensions.get("screen").width - 2 * 24;
const INPUT_WIDTH = FORM_WIDTH / 2 - 8;

export default function Home() {
  const [initialValue, setInitialValue] = useState("R$ 0,00");
  const [monthlyValue, setMonthlyValue] = useState("R$ 0,00");
  const [interestRate, setInterestRate] = useState("6");
  const [period, setPeriod] = useState("");
  const [interestPeriod, setInterestPeriod] = useState<InterestPeriod>(
    InterestPeriod.Yearly
  );
  const [periodUnit, setPeriodUnit] = useState<PeriodUnit>(PeriodUnit.Years);
  const [interestType, setInterestType] = useState<InterestType>(
    InterestType.Compound
  );

  const handleSubmit = () => {
    //
    console.log(
      JSON.stringify(
        {
          interestType,
          initialValue,
          monthlyValue,
          interestRate,
          interestPeriod,
          period,
          periodUnit,
        },
        null,
        2
      )
    );
  };

  return (
    <Stack bg="$background" f={1} jc="center" ai="center">
      <YStack w="100%" px="$5">
        <Form onSubmit={handleSubmit}>
          <H2 color="$color" fontSize={20} ta="center" mb="$4">
            Calculadora de Juros
          </H2>

          <ToggleGroup
            type="single"
            mb="$4"
            value={interestType}
            onValueChange={(value) =>
              !!value && setInterestType(value as InterestType)
            }
          >
            <ToggleGroup.Item value={InterestType.Simple} f={1}>
              <Text>Simples</Text>
            </ToggleGroup.Item>

            <ToggleGroup.Item value={InterestType.Compound} f={1}>
              <Text>Composto</Text>
            </ToggleGroup.Item>
          </ToggleGroup>

          <XStack jc="space-between">
            <YStack>
              <Label htmlFor="initialValue" mb="$2">
                Valor inicial
              </Label>

              <Input
                w={INPUT_WIDTH}
                id="initialValue"
                mb="$4"
                keyboardType="numeric"
                placeholder="Valor inicial"
                value={initialValue}
                onChangeText={setInitialValue}
                format={formatMaskMoney}
              />
            </YStack>

            <YStack>
              <Label htmlFor="monthlyValue" mb="$2">
                Valor mensal
              </Label>

              <Input
                w={INPUT_WIDTH}
                id="monthlyValue"
                mb="$4"
                keyboardType="numeric"
                placeholder="Valor mensal"
                value={monthlyValue}
                onChangeText={setMonthlyValue}
                format={formatMaskMoney}
              />
            </YStack>
          </XStack>

          <Label htmlFor="interestRate" mb="$2">
            Taxa de juros (%)
          </Label>

          <XStack jc="space-between">
            <Input
              w={INPUT_WIDTH}
              id="interestRate"
              mb="$4"
              placeholder="Taxa de juros"
              keyboardType="numeric"
              value={interestRate}
              onChangeText={setInterestRate}
            />

            <ToggleGroup
              w={INPUT_WIDTH}
              type="single"
              mb="$4"
              value={interestPeriod}
              onValueChange={(value) =>
                !!value && setInterestPeriod(value as InterestPeriod)
              }
            >
              <ToggleGroup.Item value={InterestPeriod.Monthly} f={1}>
                <Text>mensal</Text>
              </ToggleGroup.Item>

              <ToggleGroup.Item value={InterestPeriod.Yearly} f={1}>
                <Text>anual</Text>
              </ToggleGroup.Item>
            </ToggleGroup>
          </XStack>

          <Label htmlFor="period" mb="$2">
            Período
          </Label>

          <XStack jc="space-between">
            <Input
              w={INPUT_WIDTH}
              id="period"
              mb="$4"
              placeholder="Período"
              keyboardType="numeric"
              value={period}
              onChangeText={setPeriod}
            />

            <ToggleGroup
              w={INPUT_WIDTH}
              type="single"
              mb="$4"
              value={periodUnit}
              onValueChange={(value) =>
                !!value && setPeriodUnit(value as PeriodUnit)
              }
            >
              <ToggleGroup.Item value={PeriodUnit.Months} f={1}>
                <Text>meses</Text>
              </ToggleGroup.Item>

              <ToggleGroup.Item value={PeriodUnit.Years} f={1}>
                <Text>anos</Text>
              </ToggleGroup.Item>
            </ToggleGroup>
          </XStack>

          <Form.Trigger asChild>
            <Button>Calcular</Button>
          </Form.Trigger>
        </Form>
      </YStack>
    </Stack>
  );
}

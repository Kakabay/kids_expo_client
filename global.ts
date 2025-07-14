const tokens = {
  purple: {
    50: { value: "#f5f1f9", type: "color" },
    100: { value: "#e0d2ec", type: "color" },
    200: { value: "#cab4e0", type: "color" },
    300: { value: "#b596d3", type: "color" },
    400: { value: "#a078c7", type: "color" },
    500: { value: "#8755b8", type: "color" },
    600: { value: "#7545a4", type: "color" },
    700: { value: "#5f3886", type: "color" },
    800: { value: "#4a2b68", type: "color" },
    900: { value: "#341f49", type: "color" },
    950: { value: "#1f122b", type: "color" },
  },
  orange: {
    50: { value: "#fef1ec", type: "color" },
    100: { value: "#fad4c4", type: "color" },
    200: { value: "#f7b69d", type: "color" },
    300: { value: "#f49975", type: "color" },
    400: { value: "#f17c4d", type: "color" },
    500: { value: "#ed5417", type: "color" },
    600: { value: "#d84911", type: "color" },
    700: { value: "#b03c0e", type: "color" },
    800: { value: "#882e0b", type: "color" },
    900: { value: "#612107", type: "color" },
    950: { value: "#391304", type: "color" },
  },
  neutral: {
    50: { value: "#f5f4f6", type: "color" },
    100: { value: "#dfdde2", type: "color" },
    200: { value: "#cac6ce", type: "color" },
    300: { value: "#b5afba", type: "color" },
    400: { value: "#9f97a7", type: "color" },
    500: { value: "#877d90", type: "color" },
    600: { value: "#746b7e", type: "color" },
    700: { value: "#5f5766", type: "color" },
    800: { value: "#49444f", type: "color" },
    900: { value: "#343038", type: "color" },
    950: { value: "#1f1c21", type: "color" },
    black: { value: "#000", type: "color" },
    white: { value: "#fff", type: "color" },
  },
  font: {
    family: {
      brand: {
        value: "Roboto",
        type: "fontFamilies",
        description: "Для заголовков и акцентов",
      },
      body: {
        value: "Roboto",
        type: "fontFamilies",
        description: "Для основного текста и интерфейса",
      },
    },
    weight: {
      regular: {
        value: "400",
        type: "fontWeights",
        description: "Regular",
      },
      medium: {
        value: "500",
        type: "fontWeights",
        description: "Medium",
      },
      semibold: {
        value: "600",
        type: "fontWeights",
        description: "SemiBold",
      },
      bold: {
        value: "700",
        type: "fontWeights",
        description: "Bold",
      },
    },
    size: {
      xs: {
        value: "12",
        type: "fontSizes",
        description: "Самый мелкий текст: теги, юридическая информация",
      },
      sm: {
        value: "14",
        type: "fontSizes",
        description: "Подписи (captions), мета-информация (дата, автор)",
      },
      md: {
        value: "16",
        type: "fontSizes",
        description: "База. Основной наборный текст (body)",
      },
      lg: {
        value: "18",
        type: "fontSizes",
        description: "Увеличенный наборный текст или небольшие подзаголовки",
      },
      xl: {
        value: "20",
        type: "fontSizes",
        description: "Заголовки H4, акцентные фразы",
      },
      "2xl": {
        value: "24",
        type: "fontSizes",
        description: "Заголовки H3",
      },
      "3xl": {
        value: "32",
        type: "fontSizes",
        description: "Заголовки H2",
      },
      "4xl": {
        value: "40",
        type: "fontSizes",
        description: "Заголовки H1",
      },
      "5xl": {
        value: "48",
        type: "fontSizes",
        description: 'Главные "геройские" заголовки',
      },
    },
    "line-height": {
      tight: {
        value: "120%",
        type: "lineHeights",
        description: "Для заголовков",
      },
      normal: {
        value: "150%",
        type: "lineHeights",
        description: "Для наборного текста",
      },
      compact: {
        value: "100%",
        type: "lineHeights",
        description: "Для UI-элементов",
      },
    },
  },
  focus: {
    ring: {
      value: {
        x: "0",
        y: "0",
        blur: "0",
        spread: "2",
        color: "{border.focused}",
        type: "dropShadow",
      },
      type: "boxShadow",
    },
  },
  red: {
    50: { value: "#fdecec", type: "color" },
    100: { value: "#fac5c5", type: "color" },
    200: { value: "#f69e9e", type: "color" },
    300: { value: "#f27777", type: "color" },
    400: { value: "#ef4f4f", type: "color" },
    500: { value: "#eb2626", type: "color" },
    600: { value: "#d51414", type: "color" },
    700: { value: "#ae1010", type: "color" },
    800: { value: "#860c0c", type: "color" },
    900: { value: "#5f0909", type: "color" },
    950: { value: "#380505", type: "color" },
  },
};

export default tokens;

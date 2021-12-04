<template>
  <button type="button" :class="classes" :style="style">{{ label }}</button>
</template>

<script>
import "./button.css";
import { reactive, computed } from "vue";

export default {
  name: "my-button",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
    },
    // secondary: {
    //   type: Boolean,
    // },
    size: {
      type: String,
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
    border: {
      type: Boolean,
    },
    borderColor: {
      type: String,
    },
  },

  // emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "storybook-button": true,
        "storybook-button--primary": true,
        "storybook-button--secondary": !props.primary,
        "storybook-button--border": props.border,
        [`storybook-button--${props.size || "medium"}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        border: [`3px solid${props.borderColor}`],
      })),
      onHover() {
        //  backgroundColor: props.backgroundColor
      },
    };
  },
};
</script>

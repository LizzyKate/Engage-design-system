import MyForm from "./form.vue";

export default {
  title: "Example/Form",
  component: MyForm,
};

const Template = (args) => ({
  components: { MyForm },
  setup() {
    return { args };
  },
  template: '<my-form v-bind="args"/>',
});

export const InputFields = Template.bind({});

InputFields.args = {
  /* 👇 The args you need here will depend on your component */
};

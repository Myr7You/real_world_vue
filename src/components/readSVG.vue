<template>
  <div>
    <ul id="example-1">
      <li v-for="id in ids" :key="id">
        <BaseIcon :name="id" />
        {{ id }}
      </li>
    </ul>
  </div>
</template>

<script>
import svgId from "@/components/svg_id";
export default {
  data() {
    return {
      ids: svgId
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding-inline-start: 0px;
  li {
    list-style: none;
    display: inline-block;
    width: 230px;
    color: #1e8694;
    font-weight: bold;
  }
}
</style>

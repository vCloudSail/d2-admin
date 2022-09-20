
<script>
/**
 * 任意图标组件，支持svg、font-icon、img
 * @author lcm
 * @createTime 2022年9月20日14:50:09
 */
export default {
  name: "AnyIcon",
  functional: true,
  props: {
    src: {
      type: String,
      required: true,
    },
    fontIconPrefix: {
      type: String,
      default: "fa",
    },
    width: Number,
    height: Number,
    size: Number,
  },
  render(h, context) {
    const { src, width, height, size, fontIconPrefix } = context.props;

    let fontIconReg = new RegExp(
        `^el-icon${fontIconPrefix ? `|${fontIconPrefix}` : ""}.*`,
        "gmi"
      ),
      staticClass = context.data.staticClass ?? "";

    if (fontIconReg.test(src)) {
      // 字体图标
      if (size) {
        context.data.attrs.style = `width:${size}px;height:${size}px;font-size:${size}px;`;
      }

      return h("i", {
        ...context.data,
        staticClass: "any-icon is-font " + src + staticClass,
      });
    } else {
      context.data.attrs.style = context.data.attrs.style ?? "";

      if (size) {
        context.data.attrs.style += `width:${size}px;height:${size}px;`;
      } else {
        if (width) {
          context.data.attrs.style += `width:${width}px;`;
        }
        if (height) {
          context.data.attrs.style += `height:${height}px;`;
        }
      }

      if (/[/]|(^http:)|([.](png|gif|jpg|jpeg|svg)$)/.test(src)) {
        // 外链或图片
        context.data.attrs.src = src;
        return h("img", {
          ...context.data,
          staticClass: "any-icon is-image" + staticClass,
        });
      } else if (/^svg-icon.*/.test(src)) {
        // svg图标
        context.data.attrs["xmlns"] = "http://www.w3.org/2000/svg";
        context.data.attrs["xmlns:xlink"] = "http://www.w3.org/1999/xlink";
        context.data.style = context.data.style ?? {};

        return h(
          "svg",
          { ...context.data, staticClass: "any-icon is-svg" + staticClass },
          [
            h("use", {
              attrs: {
                "xlink:href": "#" + src,
              },
            }),
          ]
        );
      } else {
        return h("span", { ...context.data, staticClass: "any-icon is-empty" });
      }
    }
  },
};
</script>

<style lang="scss">
.any-icon {
  width: 1em;
  height: 1em;
  // overflow: hidden;
  display: inline-block;
  &.is-svg {
    use {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  }
  &.is-font {
    color: currentColor;
    line-height: 1em;
  }
  &.is-image {
    object-fit: contain;
  }
}
</style>

<template>
    <nya-container title="背景图片" class="set-bg">
        <div class="radio-group">
            <nya-radio-group :value="$store.state.setting.bg.type" @change="handleChange('setting.bg.type', $event)">
                <nya-radio value="none" label="无" />
                <nya-radio value="anime" label="随机动漫图片" />
                <nya-radio value="bing" label="必应每日壁纸" />
                <nya-radio value="custom" label="自定义来源" />
            </nya-radio-group>
        </div>

        <nya-input v-show="$store.state.setting.bg.type === 'custom'" :value="$store.state.setting.bg.customUrl" label="输入壁纸链接" :placeholder="`${$store.state.env.background}`" autocomplete="off" fullwidth @change="handleChange('setting.bg.customUrl', $event.target.value)" @keyup.enter="handleChange('setting.bg.customUrl', $event.target.value)" />
        <hr>
        <nya-checkbox :checked="$store.state.setting.bg.transparentEl" label="元素半透明" @change="handleChange('setting.bg.transparentEl', $event)" />

        <div class="nya-subtitle">
            高斯模糊
        </div>
        <client-only>
            <vue-slider :value="$store.state.setting.bg.blur" lazy :min="0" :max="100" @change="handleChange('setting.bg.blur', $event)" />
        </client-only>

        <div class="nya-subtitle">
            透明度
        </div>
        <client-only>
            <vue-slider :value="$store.state.setting.bg.opacity" lazy :min="1" :max="100" @change="handleChange('setting.bg.opacity', $event)" />
        </client-only>
    </nya-container>
</template>

<script>
import 'vue-slider-component/theme/default.css';
let VueSlider;
if (process.browser) {
    VueSlider = require('vue-slider-component');
}
export default {
    name: 'SetBackground',
    components: {
        VueSlider
    },
    data() {
        return {
            customUrl: ''
        };
    },
    mounted() {
        const setting = this.$store.state.setting;
        this.customUrl = setting.bg.customUrl;
    },
    methods: {
        handleChange(key, value) {
            this.$store.commit('SET_STORE', {
                key,
                value
            });
        }
    }
};
</script>

<style lang="scss">
.set-bg {
    .nya-radio {
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .nya-subtitle {
        margin-top: 15px;
    }
    .preview {
        display: block;
        max-height: 200px;
        border: 1px solid var(--t1);
    }
}
</style>

<template>
  <div class="pesona-datetime-picker">
    <label v-if="label">{{label}}</label>
    <div  :class="{
      'date-wrapper-block': block,
      'date-wrapper': !block
      }">
      <x-select class="datepick-input" :size="size" v-model="sDate" :placeholder="'dd'">
        <x-select-option v-for="option in dateOptions" v-bind:value="option.val" :key="option.val">
          {{ option.show }}
        </x-select-option>
      </x-select>
      <x-select class="datepick-input" :size="size" v-model="sMonth" :placeholder="'mmm'">
        <x-select-option v-for="option in monthOptions" v-bind:value="option.val" :key="option.val">
          {{ option.show }}
        </x-select-option>
      </x-select>
      <x-select class="datepick-input" :size="size" v-model="sYear" :placeholder="'yyyy'">
        <x-select-option v-for="option in yearOptions" v-bind:value="option.val" :key="option.val">
          {{ option.show }}
        </x-select-option>
      </x-select>
      <template v-if="!onlyDate">
        <x-select class="datepick-input" :size="size" v-model="sHour" :placeholder="'hh'">
          <x-select-option v-for="option in hourOptions" v-bind:value="option.val" :key="option.val">
            {{ option.show }}
          </x-select-option>
        </x-select>
        <x-select class="datepick-input" :size="size" v-model="sMin" :placeholder="'mm'">
          <x-select-option v-for="option in minOptions" v-bind:value="option.val" :key="option.val">
            {{ option.show }}
          </x-select-option>
        </x-select>
        <x-select class="datepick-input" :size="size" v-model="sSec" :placeholder="'ss'">
          <x-select-option v-for="option in secOptions" v-bind:value="option.val" :key="option.val">
            {{ option.show }}
          </x-select-option>
        </x-select>
      </template>
    </div>
    {{stringDate}}
  </div>
</template>

<script>
  import _ from 'lodash';
  import * as moment from 'moment';
  import dimensionMixin from 'mixins/dimensionMixin';
  import styleMixin from 'mixins/styleMixin';
  import dataTypeMixin from 'mixins/dataTypeMixin';
  import xSelect from './xSelect';
  import xSelectOption from './xSelectOption';

  export default {
    name: 'x-datetime-picker',
    components: { xSelect, xSelectOption },
    mixins: [dimensionMixin, styleMixin, dataTypeMixin],
    props:{
      // for v-model
      value: {
        default: false
      },
      label: {
        type: String,
        default: "Label"
      },
      mode: {
        type: String,
        default: 'antd'
      },
      type: {
        type: String,
        default: 'simple'
      },
      onlyDate: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'fair'
      },
      block: {
        type: Boolean,
        default: false
      },
    },
    data: () => {
      return {
        dateOptions: [],
        monthOptions: [{
          show: "Jan",
          val: 0
        },{
          show: "Feb",
          val: 1
        },{
          show: "Mar",
          val: 2
        },{
          show: "Apr",
          val: 3
        },{
          show: "Mei",
          val: 4
        },{
          show: "Jun",
          val: 5
        },{
          show: "Jul",
          val: 6
        },{
          show: "Aug",
          val: 7
        },{
          show: "Sep",
          val: 8
        },{
          show: "Oct",
          val: 9
        },{
          show: "Nov",
          val: 10
        },{
          show: "Des",
          val: 11
        }],
        yearOptions: [],
        hourOptions: [],
        minOptions: [],
        secOptions: [],

        sDate: undefined,
        sMonth: undefined,
        sYear: undefined,
        sHour: undefined,
        sMin: undefined,
        sSec: undefined,

        stringDate: ""
      }
    }, 
    mounted(){
      this.$nextTick(()=>{
        this.initDatetimeOption()
      });
    },
    computed:{

    },
    watch: {
      sDate: function(){
        this.onDateChange();
      },
      sMonth: function(){
        this.onDateChange();
      },
      sYear: function(){
        this.onDateChange();
      },
      sHour: function(){
        this.onDateChange();
      },
      sMin: function(){
        this.onDateChange();
      },
      sSec: function(){
        this.onDateChange();
      }
    },
    methods: {
      initDatetimeOption(){
        let self = this;
        let date_obj = new Date(self.init);

        if (self.isValidDate(date_obj)){ 
          // date_obj = new Date(); // or today

          self.sDate = date_obj.getDate();
          self.sMonth = date_obj.getMonth();
          self.sYear = date_obj.getFullYear();
          self.sHour = date_obj.getHours();
          self.sMin = date_obj.getMinutes();
    
          if (self.simple){
            self.sHour = 0;
            self.sMin = 0;
          }    
        }else{
          self.sDate = undefined;
          self.sMonth = undefined;
          self.sYear = undefined;
          self.sHour = undefined;
          self.sMin = undefined;
        }
        self.calculateDateOption();
        self.setYearOption();
        self.setHourOption();
        self.setMinOption();
        self.setSecOption();
        self.onDateChange();
      },
      calculateDateOption(){
        this.dateOptions = [];
        if (this.sYear && (this.sMonth >= 0)){
          let month_count = new Date(this.sYear, this.sMonth+1, 0).getDate();       
          for (let index = 0; index < month_count; index++) {
            this.dateOptions.push({
              val: index+1,
              show: (index+1) < 10 ? `0${index+1}` : `${index+1}`
            });
          }
          if (this.sDate){
            let biggest_date_on_the_month = this.dateOptions[this.dateOptions.length-1]
            if(this.sDate > biggest_date_on_the_month){
              this.sDate = biggest_date_on_the_month;
            }
          }
        }else{
          for (let index = 0; index < 31; index++) {
            this.dateOptions.push({
              val: index+1,
              show: (index+1) < 10 ? `0${index+1}` : `${index+1}`
            });
          }
        }
      },
      setYearOption(){
        this.yearOptions = []
        let start_year = 2010;
        for (let index = 0; index < 20; index++) {
          this.yearOptions.push({
            val: start_year + index,
            show: `${start_year + index}`
          });
        }
      },
      setHourOption(){
        this.hourOptions = [];
        for (let index = 0; index < 24; index++) {
          this.hourOptions.push({
            val: index,
            show: (index) < 10 ? `0${index}` : `${index}`
          });
        }
      },
      setMinOption(){
        this.minOptions = [];
        for (let index = 0; index <= 59; index++) {
          this.minOptions.push({
            val: index,
            show: (index) < 10 ? `0${index}` : `${index}`
          });
        }
      },
      setSecOption(){
        this.secOptions = [];
        for (let index = 0; index <= 59; index++) {
          this.secOptions.push({
            val: index,
            show: (index) < 10 ? `0${index}` : `${index}`
          });
        }
      },
      onDateChange(){
        this.calculateDateOption();
        if (this.sYear && (this.sMonth >= 0) && this.sDate){
          let date_obj = undefined;
          if (this.onlyDate){
            this.sHour = 0;
            this.sMin = 0;
            this.sSec = 0;
            date_obj = new Date(this.sYear, this.sMonth, this.sDate);
          }else{
            date_obj = new Date(this.sYear, this.sMonth, this.sDate, this.sHour, this.sMin, this.sSec);
          }  
          if(this.isValidDate(date_obj)){
            this.stringDate = date_obj.toISOString();
            this.$emit('input', this.stringDate);
          }
        }
      },
      isValidDate(d) {
        return d instanceof Date && !isNaN(d);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pesona-datetime-picker {
    position: relative;
    display: block;
    font-family: 'Roboto', sans-serif;

    $ant-blue: #40a9ff;
    $ant-label-blue: #376DB0;

    label {
      display: block;
      line-height: 21px;
      font-size: var(--pesona-font-base);
      color: $ant-label-blue;
      font-weight: 500;
    }

    .date-wrapper-block {
      margin-top: 4px;
      display: flex;

      .datepick-input {
        width: 100%;
        margin-left: 4px;
        margin-right: 4px;
      }

      .datepick-input:first-child {
        margin-left: 0;
      }

      .datepick-input:last-child {
        margin-right: 0;
      }
    }
  }
</style>

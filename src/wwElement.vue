<template>
  <div class="ww-gantt-chart">
    <div class="gantt-header">
      <div class="task-header">
        <wwElement
          v-bind="headerText"
          :ww-props="{ text: 'Tasks' }"
        />
      </div>
      <div class="timeline-header" ref="timelineHeader">
        <div v-for="(date, index) in dateHeaders" :key="index" class="date-column">
          <wwElement
            v-bind="dateText"
            :ww-props="{ text: date }"
          />
        </div>
      </div>
    </div>
    <div class="gantt-body">
      <div class="tasks-list">
        <div v-for="(task, index) in content.tasks" :key="index" class="task-row">
          <wwElement
            v-bind="content.tasks[index].nameElement"
            :ww-props="{ text: task.name }"
          />
        </div>
      </div>
      <div class="timeline-body" ref="timelineBody">
        <div v-for="(task, taskIndex) in content.tasks" :key="taskIndex" class="timeline-row">
          <div 
            class="task-bar"
            :style="{
              left: getTaskOffset(task),
              width: getTaskWidth(task),
              backgroundColor: task.color || '#4A90E2'
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
    headerText: { type: Object, required: true },
    dateText: { type: Object, required: true }
  },
  computed: {
    dateHeaders() {
      if (!this.content.tasks || !this.content.tasks.length) return [];
      
      // Find min and max dates from tasks
      const dates = this.content.tasks.reduce((acc, task) => {
        acc.push(new Date(task.startDate));
        acc.push(new Date(task.endDate));
        return acc;
      }, []);
      
      const minDate = new Date(Math.min(...dates));
      const maxDate = new Date(Math.max(...dates));
      
      // Generate array of dates between min and max
      const headers = [];
      const currentDate = new Date(minDate);
      
      while (currentDate <= maxDate) {
        headers.push(new Date(currentDate).toLocaleDateString());
        currentDate.setDate(currentDate.getDate() + 1);
      }
      
      return headers;
    }
  },
  methods: {
    getTaskOffset(task) {
      const startDate = new Date(task.startDate);
      const firstDate = new Date(this.dateHeaders[0]);
      const daysDiff = (startDate - firstDate) / (1000 * 60 * 60 * 24);
      return `${daysDiff * 100}px`;
    },
    getTaskWidth(task) {
      const startDate = new Date(task.startDate);
      const endDate = new Date(task.endDate);
      const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
      return `${days * 100}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
.ww-gantt-chart {
  width: 100%;
  overflow: hidden;
  border: 1px solid #ddd;
  
  .gantt-header {
    display: flex;
    border-bottom: 1px solid #ddd;
    
    .task-header {
      width: 200px;
      padding: 10px;
      border-right: 1px solid #ddd;
      font-weight: bold;
    }
    
    .timeline-header {
      display: flex;
      overflow-x: auto;
      
      .date-column {
        min-width: 100px;
        padding: 10px;
        text-align: center;
        border-right: 1px solid #ddd;
      }
    }
  }
  
  .gantt-body {
    display: flex;
    
    .tasks-list {
      width: 200px;
      border-right: 1px solid #ddd;
      
      .task-row {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        height: 40px;
      }
    }
    
    .timeline-body {
      flex: 1;
      overflow-x: auto;
      
      .timeline-row {
        position: relative;
        height: 40px;
        border-bottom: 1px solid #ddd;
        
        .task-bar {
          position: absolute;
          top: 8px;
          height: 24px;
          border-radius: 4px;
        }
      }
    }
  }
}
</style> 
# Vue.js Project README

## Overview

This Vue.js project consists of various components for a web application that handles pipelines, job history, and settings. The application uses Vuetify for UI components and Vuex for state management. The following sections describe the components and their usage.

## Components

### 1. Pipeline Management

- **`PipelineDetail.vue`**
  - Displays detailed information about a specific pipeline.
  - Shows pipeline name, source and destination connectors, and the frequency of synchronization.
  - Includes a button to sync the pipeline immediately and a switch to enable/disable it.
  - Features a settings icon that opens a dialog for configuring the pipeline.

- **`PipelineList.vue`**
  - Lists all pipelines with filtering and search capabilities.
  - Provides a delete option with a confirmation dialog.
  - Allows navigation to detailed information for each pipeline.

### 2. Job History

- **`JobHistoryTable.vue`**
  - Displays job history in a table format with search functionality.
  - Includes status icons, source and destination names, sync types, and last sync times.
  - Features a delete icon with a confirmation dialog for removing job history entries.

### 3. Dropdowns and Filters

- **`AllDropdown.vue`**
  - A reusable dropdown component used for various filters such as statuses, schedule types, sources, and destinations.
  - Emits a change event to apply filters.

### 4. Layout and Containers

- **`MainLayout.vue`**
  - The main layout component that includes `TopContainer` and `JobHistoryTable` components.
  - Provides a structured layout for the page.

- **`TopContainer.vue`**
  - Contains information and actions related to the top section of the page.
  - Includes buttons and summary information.

- **`BottomContainer.vue`**
  - Contains additional content or components for the bottom section of the page.

### 5. UI Elements

- **`Button.vue`**
  - A custom button component used to trigger actions like creating a new pipeline.
  - Includes a plus icon and text.

### 6. Other Components

- **`Setting.vue`**
  - A dialog component for configuring pipeline settings.
  - Allows editing of pipeline details such as schedule type and frequency.

## Installation

1. Clone the repository:
    git clone <https://github.com/nehanoor-dev/frontend>

2. Install the dependencies:
    npm install

3. Run the development server:
    npm run dev or npm run serve
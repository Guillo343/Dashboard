import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
  activeTab: string;
  dateRange: {
    start: string;
    end: string;
  };
  isLoading: boolean;
}

const initialState: DashboardState = {
  activeTab: 'overview',
  dateRange: {
    start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    end: new Date().toISOString(),
  },
  isLoading: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setDateRange: (state, action: PayloadAction<{ start: string; end: string }>) => {
      state.dateRange = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setActiveTab, setDateRange, setLoading } = dashboardSlice.actions;
export default dashboardSlice.reducer;
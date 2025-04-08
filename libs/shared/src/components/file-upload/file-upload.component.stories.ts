import type { Meta, StoryObj } from '@storybook/angular';
import { FileUploadComponent } from './file-upload.component';

const meta: Meta<FileUploadComponent> = {
  title: 'Shared/FileUpload',
  component: FileUploadComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    id: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<FileUploadComponent>;

export const Primary: Story = {
  args: {
    label: 'Upload File',
    id: 'file-upload',
  },
};

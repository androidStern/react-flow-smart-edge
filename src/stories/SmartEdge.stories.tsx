import React from 'react'
import {
	edgesBezier,
	edgesStraight,
	edgesStep,
	edgesLabel,
	nodes,
	edgeTypes
} from './DummyData'
import { GraphWrapper } from './GraphWrapper'
import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import type { ReactFlowProps } from '@xyflow/react'

const meta = {
	title: 'Smart Edge',
	component: GraphWrapper
} satisfies Meta<typeof GraphWrapper>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<ReactFlowProps> = (args) => <GraphWrapper {...args} />

export const SmartBezier: Story = {
	render: Template,
	args: {
		edgeTypes,
		defaultNodes: nodes,
		defaultEdges: edgesBezier
	}
}

export const SmartStraight: Story = {
	render: Template,
	args: {
		...SmartBezier.args,
		defaultEdges: edgesStraight
	}
}

export const SmartStep: Story = {
	render: Template,
	args: {
		...SmartBezier.args,
		defaultEdges: edgesStep
	}
}

export const SmartBezierWithCustomLabel: Story = {
	render: Template,
	args: {
		...SmartBezier.args,
		defaultEdges: edgesLabel
	}
}

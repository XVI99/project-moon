'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ABNORMALITIES, RISK_COLORS, type Abnormality, type RiskLevel } from '@/lib/data/lobcorp/abnormalities';

interface WorkSlot {
    day: number;
    abnormalityId: string;
    employeeName: string;
    workType: 'Instinct' | 'Insight' | 'Attachment' | 'Repression';
}

interface Employee {
    name: string;
    level: number;
    stats: {
        fortitude: number;
        prudence: number;
        temperance: number;
        justice: number;
    };
}

const SAMPLE_EMPLOYEES: Employee[] = [
    { name: 'Agent A', level: 5, stats: { fortitude: 80, prudence: 75, temperance: 70, justice: 85 } },
    { name: 'Agent B', level: 4, stats: { fortitude: 60, prudence: 80, temperance: 65, justice: 55 } },
    { name: 'Agent C', level: 3, stats: { fortitude: 45, prudence: 50, temperance: 60, justice: 40 } },
    { name: 'Agent D', level: 4, stats: { fortitude: 70, prudence: 55, temperance: 75, justice: 60 } },
    { name: 'Agent E', level: 2, stats: { fortitude: 35, prudence: 40, temperance: 30, justice: 35 } },
];

export default function ToolsPage() {
    const [schedule, setSchedule] = useState<WorkSlot[]>([]);
    const [selectedAbnormality, setSelectedAbnormality] = useState<string>('');
    const [selectedEmployee, setSelectedEmployee] = useState<string>('');
    const [selectedWorkType, setSelectedWorkType] = useState<'Instinct' | 'Insight' | 'Attachment' | 'Repression'>('Instinct');
    const [currentDay, setCurrentDay] = useState(1);

    const addWorkSlot = () => {
        if (!selectedAbnormality || !selectedEmployee) return;

        const newSlot: WorkSlot = {
            day: currentDay,
            abnormalityId: selectedAbnormality,
            employeeName: selectedEmployee,
            workType: selectedWorkType,
        };

        setSchedule([...schedule, newSlot]);
    };

    const removeWorkSlot = (index: number) => {
        setSchedule(schedule.filter((_, i) => i !== index));
    };

    const getSuccessChance = (abnormality: Abnormality | undefined, employee: Employee | undefined, workType: string) => {
        if (!abnormality || !employee) return 0;

        const pref = abnormality.workPreference[workType.toLowerCase() as keyof typeof abnormality.workPreference];
        const baseChance = pref === 'Best' ? 90 : pref === 'Good' ? 70 : pref === 'Normal' ? 50 : 30;
        const levelBonus = employee.level * 5;

        return Math.min(95, baseChance + levelBonus);
    };

    const todaySchedule = schedule.filter(s => s.day === currentDay);

    return (
        <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <Link
                    href="/lobotomy-corp"
                    className="text-pm-gray-light hover:text-pm-gold text-sm mb-4 inline-block"
                >
                    ← Back to Lobotomy Corporation
                </Link>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">
                    ⚙️ Work Scheduler
                </h1>
                <p className="mt-2 text-pm-gray-light max-w-2xl mx-auto">
                    Plan your daily work rotations to maximize PE and minimize casualties
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Add Work Slot */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4">
                        <h3 className="text-lg font-bold text-white mb-4">Add Work Assignment</h3>

                        {/* Day Selector */}
                        <div className="mb-4">
                            <label className="text-sm text-pm-gray-light block mb-1">Day</label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map(day => (
                                    <button
                                        key={day}
                                        onClick={() => setCurrentDay(day)}
                                        className={`w-10 h-10 rounded-lg font-bold transition-all ${currentDay === day
                                            ? 'bg-pm-gold text-black'
                                            : 'bg-pm-gray-dark text-pm-gray-light hover:bg-pm-gray-dark/70'
                                            }`}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Abnormality Selector */}
                        <div className="mb-4">
                            <label className="text-sm text-pm-gray-light block mb-1">Abnormality</label>
                            <select
                                value={selectedAbnormality}
                                onChange={(e) => setSelectedAbnormality(e.target.value)}
                                className="w-full bg-pm-black border border-pm-gray-dark rounded-lg px-3 py-2 text-white"
                            >
                                <option value="">Select abnormality...</option>
                                {ABNORMALITIES.map(a => (
                                    <option key={a.id} value={a.id}>
                                        [{a.riskLevel}] {a.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Employee Selector */}
                        <div className="mb-4">
                            <label className="text-sm text-pm-gray-light block mb-1">Employee</label>
                            <select
                                value={selectedEmployee}
                                onChange={(e) => setSelectedEmployee(e.target.value)}
                                className="w-full bg-pm-black border border-pm-gray-dark rounded-lg px-3 py-2 text-white"
                            >
                                <option value="">Select employee...</option>
                                {SAMPLE_EMPLOYEES.map(emp => (
                                    <option key={emp.name} value={emp.name}>
                                        {emp.name} (Lv.{emp.level})
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Work Type */}
                        <div className="mb-4">
                            <label className="text-sm text-pm-gray-light block mb-1">Work Type</label>
                            <div className="grid grid-cols-2 gap-2">
                                {(['Instinct', 'Insight', 'Attachment', 'Repression'] as const).map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setSelectedWorkType(type)}
                                        className={`px-3 py-2 rounded-lg text-sm transition-all ${selectedWorkType === type
                                            ? 'bg-pm-red text-white'
                                            : 'bg-pm-gray-dark text-pm-gray-light hover:bg-pm-gray-dark/70'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Success Preview */}
                        {selectedAbnormality && selectedEmployee && (
                            <div className="mb-4 bg-pm-black/50 rounded-lg p-3">
                                <p className="text-sm text-pm-gray-light">Estimated Success:</p>
                                <p className="text-2xl font-bold text-pm-gold">
                                    {getSuccessChance(
                                        ABNORMALITIES.find(a => a.id === selectedAbnormality),
                                        SAMPLE_EMPLOYEES.find(e => e.name === selectedEmployee),
                                        selectedWorkType
                                    )}%
                                </p>
                            </div>
                        )}

                        <button
                            onClick={addWorkSlot}
                            disabled={!selectedAbnormality || !selectedEmployee}
                            className="w-full bg-pm-gold text-black font-bold py-2 rounded-lg hover:bg-yellow-500 transition-all disabled:opacity-50"
                        >
                            + Add to Schedule
                        </button>
                    </div>

                    {/* Tips */}
                    <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4">
                        <h4 className="text-yellow-400 font-bold mb-2">💡 Work Tips</h4>
                        <ul className="text-sm text-yellow-400/80 space-y-1">
                            <li>• Match work types to abnormality preferences</li>
                            <li>• High-level agents for ALEPH/WAW abnormalities</li>
                            <li>• Watch for employee mental health</li>
                        </ul>
                    </div>
                </div>

                {/* Right: Schedule View */}
                <div className="lg:col-span-2">
                    <div className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4">
                        <h3 className="text-lg font-bold text-white mb-4">
                            Day {currentDay} Schedule ({todaySchedule.length} work orders)
                        </h3>

                        {todaySchedule.length === 0 ? (
                            <div className="text-center py-12 text-pm-gray-light">
                                <p className="text-4xl mb-4">📋</p>
                                <p>No work orders for Day {currentDay}</p>
                                <p className="text-sm">Add work slots using the panel on the left</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {todaySchedule.map((slot, index) => {
                                    const abnormality = ABNORMALITIES.find(a => a.id === slot.abnormalityId);
                                    const employee = SAMPLE_EMPLOYEES.find(e => e.name === slot.employeeName);
                                    const colors = abnormality ? RISK_COLORS[abnormality.riskLevel] : RISK_COLORS.ZAYIN;

                                    return (
                                        <div
                                            key={index}
                                            className={`flex items-center gap-4 bg-pm-black/50 border ${colors.border}/50 rounded-lg p-3`}
                                        >
                                            <div className="text-3xl">{abnormality?.portrait}</div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <span className={`${colors.bg} text-white text-xs px-2 py-0.5 rounded font-bold`}>
                                                        {abnormality?.riskLevel}
                                                    </span>
                                                    <span className="text-white font-bold">{abnormality?.name}</span>
                                                </div>
                                                <p className="text-sm text-pm-gray-light">
                                                    {slot.employeeName} → {slot.workType}
                                                </p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-xs text-pm-gray-light">Success</p>
                                                <p className={`font-bold ${getSuccessChance(abnormality, employee, slot.workType) >= 70 ? 'text-green-400' : 'text-yellow-400'}`}>
                                                    {getSuccessChance(abnormality, employee, slot.workType)}%
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => removeWorkSlot(schedule.indexOf(slot))}
                                                className="text-pm-red hover:text-red-400"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Total PE Preview */}
                        {todaySchedule.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-pm-gray-dark flex justify-between items-center">
                                <span className="text-pm-gray-light">Estimated PE Output:</span>
                                <span className="text-2xl font-bold text-pm-gold">
                                    {todaySchedule.reduce((sum, slot) => {
                                        const abnormality = ABNORMALITIES.find(a => a.id === slot.abnormalityId);
                                        return sum + (abnormality?.maxEnergy || 0);
                                    }, 0)} PE
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Schedule Summary */}
                    <div className="mt-4 bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4">
                        <h4 className="font-bold text-white mb-2">Weekly Summary</h4>
                        <div className="flex gap-4 text-sm">
                            {[1, 2, 3, 4, 5].map(day => {
                                const daySchedule = schedule.filter(s => s.day === day);
                                return (
                                    <div key={day} className="flex-1 text-center">
                                        <p className="text-pm-gray-light">Day {day}</p>
                                        <p className="text-pm-gold font-bold">{daySchedule.length}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
